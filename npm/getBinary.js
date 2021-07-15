const { Binary } = require("binary-install");
const os = require("os");

function getPlatform() {
  const type = os.type();
  const arch = os.arch();

  if (type === "Windows_NT" && arch === "x64") return "Windows_x86_64";

  if (type === "Windows_NT") return "Windows_i386";

  if (type === "Linux" && arch === "x64") return "linux";
  if (type === "Darwin" && arch === "x64") return "macos";

  throw new Error(`Unsupported platform: ${type} ${arch}`);
}

function getBinary() {
  const platform = getPlatform();
  const version = "0.1.1"; // require("../package.json").version;
  const url = `https://github.com/kouraf/insomnia2http/releases/download/v${version}/insomnia2http_${version}_${platform}.tar.gz`;
  const name = "insomnia2http";
  return new Binary(name, url);
}

module.exports = getBinary;
