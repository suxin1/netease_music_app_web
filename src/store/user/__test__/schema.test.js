import { normalize, denormalize } from "normalizr";
import { userSchemas } from "../schema";
// import {expect} from "chai";

const testData = {
  loginType: 1,
  code: 200,
  account: {
    id: 622834271,
    userName: "1_13540239926",
    type: 1,
    status: 0,
    whitelistAuthority: 0,
    createTime: 1508423213939,
    salt: "[B@2f1481df",
    tokenVersion: 0,
    ban: 0,
    baoyueVersion: 0,
    donateVersion: 0,
    vipType: 0,
    viptypeVersion: 0,
    anonimousUser: false,
  },
  token:
    "41066a881aff523a52556e8391c1fa1b909eb648d6013f2911bcdeda31dcb4fb33a649814e309366",
  profile: {
    userId: 622834271,
    followed: false,
    backgroundUrl:
      "https://p4.music.126.net/_f8R60U9mZ42sSNvdPn2sQ==/109951162868126486.jpg",
    detailDescription: "",
    avatarImgIdStr: "109951164089217850",
    backgroundImgIdStr: "109951162868126486",
    description: "",
    vipType: 0,
    gender: 1,
    accountStatus: 0,
    userType: 0,
    backgroundImgId: 109951162868126480,
    avatarUrl:
      "https://p3.music.126.net/6s4G1fFfca6i5QS3LHYWMA==/109951164089217850.jpg",
    defaultAvatar: false,
    province: 1000000,
    djStatus: 0,
    experts: {},
    mutual: false,
    remarkName: null,
    expertTags: null,
    authStatus: 0,
    nickname: "__suxin__",
    avatarImgId: 109951164089217860,
    birthday: -2209017600000,
    city: 1003900,
    signature: "",
    authority: 0,
    avatarImgId_str: "109951164089217850",
    followeds: 5,
    follows: 2,
    eventCount: 5,
    playlistCount: 5,
    playlistBeSubscribedCount: 0,
  },
  bindings: [
    {
      userId: 622834271,
      url: "",
      refreshTime: 1517586732,
      bindingTime: 1517586732153,
      expired: false,
      tokenJsonStr:
        '{"countrycode":"","cellphone":"13540239926","hasPassword":true}',
      expiresIn: 2147483647,
      id: 6535397520,
      type: 1,
    },
    {
      userId: 622834271,
      url: "",
      refreshTime: 1517461391,
      bindingTime: 1508423214103,
      expired: true,
      tokenJsonStr:
        '{"access_token":"7481BB0A8B6C3ADBA03FE146E1CAEAB1","openid":"6985E81196E3CFAD3DD06BE30DCF58E7","query_authority_cost":164,"nickname":"Suxin","partnerType":"0","expires_in":7776000,"login_cost":320,"authority_cost":0}',
      expiresIn: 7776000,
      id: 3230971884,
      type: 5,
    },
  ],
  cookie:
    "MUSIC_U=41066a881aff523a52556e8391c1fa1b909eb648d6013f2911bcdeda31dcb4fb33a649814e309366; Expires=Sat, 26-Sep-2020 03:09:49 GMT; Path=/;__remember_me=true; Expires=Sat, 26-Sep-2020 03:09:49 GMT; Path=/;__csrf=36d93b4e4189adf00cb91506d251d711; Expires=Sat, 26-Sep-2020 03:09:59 GMT; Path=/",
};

describe("account", function () {
  it("login data", function () {
    const normalized = normalize(testData, userSchemas.LOGIN);
    const denormalized = denormalize(
      normalized.result,
      userSchemas.LOGIN,
      normalized.entities
    );
    console.log(denormalized);
  });
});
