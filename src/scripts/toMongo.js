const path = require("path");
const fs = require("fs/promises");
const prismaClient = require("../utils/prismaClient");
const provinces = require("../data/refactored/list.json");
const createProvinces = async () => {
  const provs = provinces.flatMap(({ cities, ...province }) => province);
  await prismaClient.province.createMany({
    data: provs,
  });
};

const createCities = async () => {
  provinces.forEach(async (province) => {
    const provinceInDb = await prismaClient.province.findUnique({
      where: {
        slug: province.slug,
      },
    });

    province.cities.forEach(async (city) => {
      await prismaClient.city.create({
        data: {
          ...city,
          provinceId: provinceInDb.id,
          coordinate: {
            latitude: city.coordinate.latitude,
            longitude: city.coordinate.longitude,
          },
        },
      });
    });
  });
};

const createPrayersTimes = async () => {
  const provinces = await prismaClient.province.findMany({
    include: {
      cities: true,
    },
  });

  for (const province of provinces) {
    for (const city of province.cities) {
      for (let year = 2025; year <= 2026; year++) {
        const pathToDataFile = path.resolve(
          "src/data/refactored",
          province.slug,
          city.slug,
          `${year}.json`
        );

        const prayerData = JSON.parse(await fs.readFile(pathToDataFile));
        const refactorePrayerData = prayerData.times.map((time) => {
          const [month, date, year] = time.date.split("/");
          return {
            date: `${year}-${month}-${date}`,
            time: time.prayer,
            cityId: city.id,
          };
        });

        await prismaClient.prayer.createMany({
          data: refactorePrayerData,
        });
      }
    }
  }
};

const toMongo = async () => {
  await createProvinces();
  await createCities();
  await createPrayersTimes();
};

toMongo();
