const https = require('https');
const { exec } = require('child_process');
const fs = require('fs');

// Function to get JSON data from an endpoint
const fetchData = (url) => {
  return new Promise((resolve, reject) => {
    https.get(url, (res) => {
      let data = '';
      res.on('data', (chunk) => { data += chunk; });
      res.on('end', () => {
        try {
          resolve(JSON.parse(data));
        } catch (e) {
          resolve(data);
        }
      });
    }).on('error', reject);
  });
};

// Function to run local dev server and get data
const getLocalData = async () => {
  return new Promise((resolve) => {
    exec('npm run dev', (error, stdout, stderr) => {
      if (error) {
        console.error(`Local server error: ${error}`);
        return;
      }
      resolve(true);
    });
  });
};

const verifyDeployment = async () => {
  try {
    // Get Vercel URL from .env or vercel.json
    const vercelUrl = process.env.VERCEL_URL || 'your-vercel-url';
    
    console.log('🔍 Checking deployment consistency...');
    
    // Start local server
    await getLocalData();
    
    // Compare chapter data
    const localChapter2 = require('../app/data/chapter2.json');
    const vercelChapter2 = await fetchData(`${vercelUrl}/api/chapter2`);
    
    if (JSON.stringify(localChapter2) !== JSON.stringify(vercelChapter2)) {
      console.log('⚠️  Warning: Local and Vercel data are out of sync');
      console.log('🔄 Running deployment to sync...');
      
      exec('vercel deploy --prod', (error, stdout, stderr) => {
        if (error) {
          console.error(`Deployment error: ${error}`);
          return;
        }
        console.log('✅ Deployment completed successfully');
      });
    } else {
      console.log('✅ Local and Vercel environments are in sync');
    }
    
  } catch (error) {
    console.error('Error during verification:', error);
  }
};

// Run verification
verifyDeployment(); 