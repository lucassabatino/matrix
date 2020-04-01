import fs from "fs";
import uuid from "uuid/v4";
import path from "path";

const roomFilePath = "../file/matrix.room.web.json";

const fetchFromFile = () => {
  const roomFileExists = fs.existsSync(roomFilePath);
  if (!roomFileExists) {
    createRoomFileSync();
  }

  const roomsData = fs.readFileSync(roomFilePath);
  const roomsDetail = JSON.parse(roomsData);

  return new Promise(resolve => resolve(roomsDetail));
};

const createRoomFileSync = () => {
  const roomsData = [];

  roomsData[0] = {
    id: uuid(),
    name: "Avenida Brigadeiro Faria Lima",
    disableMeeting: true,
  };

  const niceNames = [
    "Meeting Room - Avenida Paulista",
    "Meeting Room - Beco do Batman",
    "Sala Baixo Augusta",
    "Sala Oscar Freire",
  ];

  for (const niceName of niceNames) {
    roomsData.push({
      id: uuid(),
      name: niceName
    });
  }

  fs.mkdirSync(path.dirname(roomFilePath), { recursive: true });
  fs.writeFileSync(roomFilePath, JSON.stringify(roomsData));
};

const fetchFromEnvironment = (env) => {
  const roomsData = env.ROOMS_DATA;
  const roomsDetail = JSON.parse(roomsData);

  return new Promise(resolve => resolve(roomsDetail));
};

const fetchRooms = (strategy) => {
  switch (strategy) {
    // TODO add suport to fetch from endpoint
    case "ENVIRONMENT":
      return fetchFromEnvironment(process.env);
    default:
      return fetchFromFile();
  }
};

export default fetchRooms;
