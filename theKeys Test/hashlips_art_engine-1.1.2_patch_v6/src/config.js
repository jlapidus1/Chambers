const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.sol;

// General metadata for Ethereum
const namePrefix = "Master Keys By Chambers";
const description = "Chambers is a collection of 7,777 passes that are your entry into a new innovation in the space. Our design is to make this your one stop destination to the Metaverse. Within our ecosystem you will find some of the finest quality art pieces, real life artist models and boutique concepts in the space.  Welcome to a unique and yet to be fully discovered project. To obtain your keys that open doors Step Right In.";
const baseUri = "ipfs://NewUriToReplace";

const solanaMetadata = {
  symbol: "MKBC",
  seller_fee_basis_points: 600, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://chambersnft.io/",
  creators: [
    {
      address: "8BQU8WxjxfVjyE6ejHbHBm4mQYtdALw9rfreauqG9Pbq",
      share: 90,
    },
    {
      address: "5viAxue6U8rBnc9voG85QTGijvaRoyrFnRaLWFPLoPzB",
      share: 10,
    },
  ],
};

// If you have selected Solana then the collection starts from 0 automatically
const layerConfigurations = [
  {
    growEditionSizeTo: 10,
    layersOrder: [
      { name: "Background" },
      { name: "Eyeball" },
      { name: "Eye color" },
      { name: "Iris" },
      { name: "Shine" },
      { name: "Bottom lid" },
      { name: "Top lid" },
    ],
  },
];

const shuffleLayerConfigurations = false;

const debugLogs = false;

const format = {
  width: 512,
  height: 512,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {
  ratio: 2 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
