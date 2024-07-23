const AWS = require('aws-sdk');

// Configurando o cliente S3 para usar o MinIO
const s3 = new AWS.S3({
  endpoint: 'http://localhost:9000',
  accessKeyId: 'minioadmin',
  secretAccessKey: 'minioadminpassword',
  s3ForcePathStyle: true, // necessário para usar o MinIO
});

async function listFiles() {
  try {
    const params = {
      Bucket: 'nome-do-seu-bucket',
    };

    const data = await s3.listObjectsV2(params).promise();
    const files = data.Contents.map(item => ({
      url: `http://localhost:9000/nome-do-seu-bucket/${item.Key}`,
      key: item.Key,
    }));

    return files;
  } catch (error) {
    console.error('Error listing files:', error);
    throw error;
  }
}

module.exports = listFiles;
