const bcrypt = require('bcrypt');
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const main = async () => {
  try {
    const usersData = [
      {
        email: 'buildandservice@gmail.com',
        password: await bcrypt.hash('build&servicev2', 20)
      }
      // Tambahkan lebih banyak data pengguna jika diperlukan
    ];

    for (const userData of usersData) {
      await prisma.users.create({
        data: userData
      });
    }

    console.log(`Database has been seeded. 🌱`);
  } catch (error) {
    throw error;
  }
};

main().catch((err) => {
  console.warn('Error While generating Seed: \n', err);
});
