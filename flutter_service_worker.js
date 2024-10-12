'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "4390fb85714bbfb201ddbc37c5dd3a13",
"version.json": "aaea0d981c145368359a9f257c9b8abd",
"index.html": "33c69063dfbb5823c211fcf823b5fb21",
"/": "33c69063dfbb5823c211fcf823b5fb21",
"main.dart.js": "30d98e2baf648344bdf89e1c7a3e495c",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "5f2ee3606650fc1723d6388902d64022",
"icons/Icon-192.png": "9a9f70542544e187f1471d3c661983ab",
"icons/Icon-maskable-192.png": "9a9f70542544e187f1471d3c661983ab",
"icons/Icon-maskable-512.png": "53bd9d01c283097d620b2da49d34a64a",
"icons/Icon-512.png": "53bd9d01c283097d620b2da49d34a64a",
"manifest.json": "d5d62771641dbe518a5943203073ce4b",
".git/config": "c4621adfc47d06c3805634ea5def4b86",
".git/objects/61/a19e547c49993bdc2e1a3d90197981fa262c78": "fd27abce5a2b7d86f7726ab652944f3c",
".git/objects/61/b369a4bfb750760d320e4e0be1410143be2873": "2ebd20dcc4627b4871e7bb0d074a89d5",
".git/objects/50/08ddfcf53c02e82d7eee2e57c38e5672ef89f6": "d18c553584a7393b594e374cfe29b727",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/59690e7e8e030843b711db46b1dc31fe9a1cc3": "27aec85c29727d001954155f2c72e806",
".git/objects/57/7370f78556675183415edf69cfe747061a174c": "196e4862823c9ed239847cc362918a08",
".git/objects/3b/685090c14264e0d22eea3227d07885f9c589c3": "075be83bb579704cb8222ffe921b0212",
".git/objects/6f/d5afa0808db6d23c3864df4552fa8a7964fe0d": "963ea5929df72903dd30dc04ed670f6c",
".git/objects/04/1534afdd0140add83e5ed1edba09593277d72d": "6f457ff44af093a7c6b5ff0f1b9c7ca6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/32/dc4379d14daa2c9d1292d36219b49028147138": "4b5b28fd61ec26285061bfb6633f8484",
".git/objects/3c/297d5a34c21113f2482058bc2a1503ef9873cb": "495a4b85b92c70300df06b0e0acf68e3",
".git/objects/3c/0f9d17b4ccc6350c35fdeaf94b3d8470f2f723": "8eaaa190d1e8233ce0f59ef13fd49946",
".git/objects/0e/31918385444a72b018a1f40d831c51efbca79a": "70a0c278e0d807a0e881f0fd78c6779b",
".git/objects/34/5bf1ab8b2b5433a2779aef95b38fcdb9d689fb": "54c9db9a291f450559e33bf37539cef4",
".git/objects/05/673acebee3d93e54a87bfb08b20d057deb7c14": "bab2e84e1ece8e0f60b97890d3c15db4",
".git/objects/9d/018125142e6af42661b072a7443417b5ef1673": "d1caa367724271cfc0fa4067e2a13d85",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/df/b75aaa17827d02ae8f110ce96a74ab73c6059d": "12e840f2f53f07cc2af464d5dbf2fabb",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/ff74107919fa5e4ad04d83adaa9384484f4eb4": "d02d3be26e53656ba115b64b020e876d",
".git/objects/a2/5f656592ff67a65158e148896ed167d75d8f00": "f844c1c97e3a3940c8b666be8b2662d8",
".git/objects/a5/b814a9e2bb24d5966dc2387cf4082de06bf159": "d57b7ff3d4bf17531b81f4825ba09baa",
".git/objects/bd/34626e1e6570726b3fea10880ad9f03a44eaa1": "36f7bf21e27ea2c7876fa9083e968f03",
".git/objects/d1/479bc3d5c71829deb543bb1f86181dd1386d15": "55f9900a6894bd20542db3acd471c735",
".git/objects/ae/16d77e1461ec9e3c115fd431d39542f6dca5b6": "e3f8afc7d9c8a191bc868018be782413",
".git/objects/ae/5fc9696abd9da470422cd8bc710c28aade00e6": "d8b1afb6af1a0df57bfc365cd46c5073",
".git/objects/e2/09ec9d60b5a22a02ef7a5313cdf7be92adafe4": "7b202a1470bd77336e1f88ab6a409d78",
".git/objects/c7/ad08030d95963ad074b1115cc891d0a7a66067": "596fb9f669c6f614425479d68c50e7a4",
".git/objects/c7/759d736949538ed6813413b3dc0e23d08e0406": "d94150e3f5337f1ddfeb5c0aff95cb66",
".git/objects/c7/a45e1f41d0c47c0aa667b7f380fe58e4092dab": "f131e4ef2391f3b654139c4194835b84",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/e3/1b51e3e9388ae61767c692885e5d77ff7b5346": "6ed4eb6a450521a70e40d120888b347a",
".git/objects/e4/b55a8db7888e72352797c880fc049506645baf": "8921ebd0a504ed4b275bd3c33fdd0915",
".git/objects/fe/6b4ba9c155d9b7afe5e8b032cd2c9b6a746ce2": "0366c1e607f8e8a71ccb0eef1eadf094",
".git/objects/18/8c1549fc00f113863638cafafdf64e51a541e7": "814041e381b45d1dc53bd1e756c9b6ea",
".git/objects/27/4a60e9ac115dc5b85c9b6a73ff1259e60ca076": "e7d0e741236d98455d8dd5c3a50ea587",
".git/objects/7d/86debc6c2b8699cab80e3eb31cc8d4917639a9": "e65664f86aaa44282a5625f46fa25cb1",
".git/objects/7c/f588f102369334fb608d30f05606a0f66d915e": "0f0b7afb4f06691097e478ef9ba64d68",
".git/objects/42/ede6c3da800346567a0fff0e703a2236c49a15": "d63c09444c9b7b6717f203a469b88418",
".git/objects/89/8bf650cfe9f5cf31a318b11a0317638da3d385": "5fe81d7858fc24021ba1526e78c17ac3",
".git/objects/89/84487c7ee35e37a8aa624069a9d88de9ed2f0d": "35c5a46acc11ae88991391fe4c035f14",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/17/32f6d4cb069af67fe380c716fa7e0d9647c6f8": "8ddf29991d0d6d009c5997496c12c157",
".git/objects/7b/ed18bcf72c16d3161ee58650e298f895c1f535": "10b11348da55bc6743f6b499af49a628",
".git/objects/7b/704c7739aab0bb77df2c4ea9e6bb631664f82d": "a8b316648709158ad5a698afc2c44207",
".git/objects/8f/9e91f48c36d6740a588d1a256a55148d33ff8e": "0c05208816d693970c307fdd87aa6c24",
".git/objects/10/f526f8e4dd7b7acd1ba2e1d98b71aa58834ebe": "5974a4d0484d8ad48dd07f7c3bf7830b",
".git/objects/21/40d49b230dd7fdd8f0b12b3548a8ca0b40968b": "9eb913d94a2392f59a8dcdeb6afe2b19",
".git/objects/86/ecea8b2dc8b14db1d5956ca02983fd48cdb0a5": "6068db346ad98d004e25ff85cc237361",
".git/objects/72/0067d1c4d17bf83c9f11bed30c6b561c50f2b4": "af8eeed67a28241086fe55710e02caf2",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/2a/095a9db77e3796e5c1baf9fcac52b1a7f4674e": "46ec80dd46e71aca287a0f4ffe8b80a6",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/61550398134e66c3e8b050035fde4548e9036a": "63b0251254e72922b4694383143ce888",
".git/objects/5c/d311f3596aea37e574e15187edb716fe436017": "e61c483b76ab5aeba4a95d9bf59fb830",
".git/objects/31/abb2656c8f7ad13117b26b506407f4cffb037e": "18d9a3a8bc5ebf5f47cc85109036fcd7",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/d31b58d5004420b1b32f7ee691533caf12d788": "9513214f596639c78da5c91d30c0543d",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/37/cc9f8649abf3a0ad4a5f6c69a66477038d74e0": "b673bc6360f55467fba691628b341329",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/6d/50261d523518b5bf35d7abe13b575e96709861": "bf8ecdb41c0c1daca2b550fa0f27f50e",
".git/objects/06/7a227b58fbafb041bc0146e2b72f73c2de0067": "d145690eda3bdd7f977a9533c6901e92",
".git/objects/39/92501ea5029f4e6341f66cbc06859db3807262": "56a7c3be72595fc6fb65310507b434d1",
".git/objects/52/e6a9183e4d0b0076dd2a728782c43d7de7e9f9": "4ba2c1602761d05f48de3a2e517502ac",
".git/objects/55/8c26c799e9cbe533c4114f214c20894d0f4496": "c4af868110cd68fa1cb89aa1a1c5f6e6",
".git/objects/97/d5e7d99c75c8611e2b933985c7934f3e669b50": "63bee3174d6082887b2ea8f02f8227b6",
".git/objects/63/68a137b3fc8dcb38eb917c1ab1594c628fe1f1": "09cd577d07856e5f61e237f966a594c6",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/93641df5ba1071982db56083f80e00f851ed99": "577831990382852b76b2fffb5e315ab7",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a0/412c7e3f2df5829a2d807456200f13d883ed4c": "3d8c59fb4ce23cd3edee13d4ee9e7e48",
".git/objects/a0/f944920f01a23d9d04e53cf993dbc9d7a2a0b7": "3157fc8dd3460477c0fe74bb63e978a5",
".git/objects/b8/b5fc00e6533ac87a0184d02ba1e8e0b536b177": "72ef44c72c372e4f76d8095377bc4c15",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/7027bf1439391236f3401275371425708c99a6": "a3ff18fe0a66f733bbbf980138eb452a",
".git/objects/dc/5641e0faf66fc34f89fe12c1be7abd5ff2685d": "cb278e98db008f574a3fe2d43222a5ba",
".git/objects/b6/c28b07ecdb1de494bc1fb481c3ca584e6207cb": "bceda2837b523594dbfb0809d2e6de04",
".git/objects/b6/ef1f1abfb5a1e84029136b9db49df6f4084554": "c7517fc552971fa43da58992eb7af439",
".git/objects/a9/167a21b1bfc08a3ec790f8afb91c7857f111be": "cc00b5236cfdb79a3da9f28a8d4e1cf0",
".git/objects/a9/eb061c8b211dc808de751e5ebbe86ab61ef2a9": "a2b1986ca21de474968c8fae2f5350e2",
".git/objects/a9/ef703986b445e12f64046fbc87b17c4aa2f923": "38a0080fc6b083bf0cb4097ebad38917",
".git/objects/d5/57ffbc818f23d14b4668d70035ce0ae1c4572c": "e9ed688a7af8a9f45ec0145e787c90bd",
".git/objects/aa/a90d43f1a02dfeba85a5c5725628d2ddd96270": "49a244d15cf88dc3b4ffa912c0c07cce",
".git/objects/af/09debc9d01b9674086808250a9886cb435e0a2": "372924acde949c59ab011ccf2bf5f121",
".git/objects/db/eb60f0e37e36ffd6707d90cfbc9a69f9dd626e": "15854bc80d75db28972d949c0f308ecf",
".git/objects/db/634269aad1dbfdefec9895a7d10cb89afafcfb": "26750b1fdeeab174e03743f6664f6637",
".git/objects/de/1442e5a877b78cd592e83232d7ebd976d0b304": "818ce7098d9c8de08c631d5746a4f215",
".git/objects/de/5b36c170500e511b53b09f87d276405f93d03a": "d71f5a6bd6e17b54f3af199d6ae13969",
".git/objects/a1/cfb19ef7ed2e2dc8eb1614c56b5d87729ed8bb": "c5e0bab635de96e1dcdc8b42b1598d23",
".git/objects/c3/2883842752acf742ff9e4a68f0123bb24f31f0": "79d83aa2c2b4ba9eee3ab73957c8649c",
".git/objects/cd/d6aa70da37136170f1efd5623d51fb6caf2c9a": "bb94341d04dfbf3d7b0325f45f21d7f5",
".git/objects/e6/976c97d5fa851cf9af940378e4ebbe8c35687c": "333da2c59dd5636338f798e3aa59e74e",
".git/objects/f0/1ea38e2fb3f729a0082bbe423c607df9865dc0": "74034394955660881e638c15a68500d3",
".git/objects/f0/31b7cf6cbbb2ea36b5cf1f2d437f38afaae62d": "a28f56c5ed2d5e0e5ece0a2afd4919c1",
".git/objects/f7/0464e8b9baabbc873284d0608afec0dc18f563": "1d84d28ff4fb7882f16957173b111d07",
".git/objects/e8/d3b307d6c99de248dea13abc19ceb6f2d6bd11": "2ba4ef5c00f6e2e188bfae6243f83bd7",
".git/objects/fa/9dbd8a7da38c93176d9f16011908c34b1faf73": "795fa353a7742c1933b9e66a37cc898f",
".git/objects/fa/9a0e7576cd17a2a66798c2e774f0d83997bad8": "84faed4c021e18b79eb78db2f54d439d",
".git/objects/ff/d9ce920ed1c33da4eaad49666c31fc4915c64d": "09c5192c7e31ae0ae319dd6e79369362",
".git/objects/c2/a8064f14b44615bf89f8e5109b2ec13d25900a": "2cbdcf67f151dfbf854dd427129abe34",
".git/objects/f8/fee1d83b455c06c022f05269cd485ea8cd865c": "31b5727cdc193300093b818d4696f014",
".git/objects/ce/fba8f4e00d8b941bfa1e0e623a1405407a21ba": "fef545491e0f987fd9b2aae775890799",
".git/objects/46/7aff32312985f2a6dcff208c05bd82a657461e": "2e74b7ce94b1b3211f71b224c642d700",
".git/objects/41/fc9f481da12c2b99a6c16cab1ad65b65521eb2": "f39e0537e293437d07ed6d2dd7d15d0c",
".git/objects/41/257d9f02db9fddbfa2c3427f2b5012ce4d68f3": "2fdc90d013f45265f6483f787a4035c7",
".git/objects/70/27d35ee14d8c65075d55a3446e03fc4d17e488": "45a5d1ea236b35dfd6f9926670fcf811",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/8d/98e6766ed1b55bcf2cda15c45f0daddfacc07b": "048acd268a7a0f15bed8817c7306c830",
".git/objects/8d/8f61b48a73e7abe16865af3376a0743c73c35f": "2e5df36b4af93a96249ae2a81b9fa49b",
".git/objects/12/6f4259a4d2b81af8866a21d2122ed664a9a044": "51327fc491a71ac32fd8c14dbb488e25",
".git/objects/8c/5180f7e18be2bfa48b5433cd4981b7134c535f": "6d013c1a3545d38e1330d170eafe357a",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/6fe451983eaf8b7fed6b200fac52724faa3bcc": "524987ddcfeb872de03f82e229015949",
".git/objects/71/21c22fec89818391b1ced660f3e20443c454a3": "99c15946a98176566b583ccf20de7dd9",
".git/objects/76/8734ad6fdaae0ad1c82cedbc6c571fcf1a6397": "48f0201dad3c57be4253a3f45fbf1262",
".git/objects/82/2e80931c66ca1eda4b81f3e4056583d0a8d56c": "25ed67f159afed0cc81226ec1909ea33",
".git/objects/40/00b6106b7b6cb41563fa01933d1152cf477b99": "f83d05372db5a1869583dff82739cc40",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/7546e81f2c8f913bc8471b850c085802c04357": "381eb5a3e3e416ebe0e6310b55771354",
".git/objects/14/33ea36732d1aff0d5ad207982418c8a1eaa312": "223f6b71a5b11672e80aa2755030e3bf",
".git/objects/8e/0b700c240b9e6dd576d479e46163383f2d4e3a": "e4ac3b55382d9946719a46c544107ccf",
".git/objects/25/8b3eee70f98b2ece403869d9fe41ff8d32b7e1": "05e38b9242f2ece7b4208c191bc7b258",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b846d3a4f87cc7eb8f26333ed1792704",
".git/logs/refs/heads/main": "b846d3a4f87cc7eb8f26333ed1792704",
".git/logs/refs/remotes/origin/main": "6d570043c95cab6e46d09653af7e5190",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "44619145b3968e49b04c3b49508d332e",
".git/refs/remotes/origin/main": "44619145b3968e49b04c3b49508d332e",
".git/index": "3ed19fdb1cd41418c8624150d414c532",
".git/COMMIT_EDITMSG": "df76e7dd6f24389cb9280b1fd0c43da6",
"assets/AssetManifest.json": "92360b5121c45648fa14bc98167953d9",
"assets/NOTICES": "7c8555ad12ca6b7cf112bd4136d894af",
"assets/FontManifest.json": "54622dafb0753b9ed21d2cbe9caec828",
"assets/AssetManifest.bin.json": "c4e4c2e2108685712f3e1fba2b32c110",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "1e419f503df84c2dd48eaa8b60dfbe66",
"assets/fonts/MaterialIcons-Regular.otf": "54c970fc9cd166eb52e526adb9b1576c",
"assets/assets/images/appBar/person.svg": "b696e3150f7e16b8746cf3bbdcf28632",
"assets/assets/images/appBar/ambulance.png": "d36a7505767c31e49248cc3b48f0e14d",
"assets/assets/images/appBar/arrow_back.svg": "b431825ae684918e83a1d320bd9914fd",
"assets/assets/images/appBar/group.svg": "100277d6d8d1c620283972550a5c6962",
"assets/assets/images/appBar/settings.svg": "08dc67b3bbd693e1f7f182c1531cba3b",
"assets/assets/images/appBar/wifi.svg": "defa1db5bd34051ca3416727fd6ea1de",
"assets/assets/images/appBar/Call.png": "2d130788d3a33a9c2fe138fcdcdb3e98",
"assets/assets/images/appBar/Section-Divider-Art.svg": "a8991712c1b671c22cdf7d91bd8ffdad",
"assets/assets/images/footerBar/footer.svg": "ff3953dafa3bad93fdcacaec17af41b8",
"assets/assets/images/screeningTools/Group_2220.png": "8caa4492d7d26fa39d5365919bd3853e",
"assets/assets/images/screeningTools/Fingerprint_Timer.png": "a4bd2d7f00e0684c5a78b7abcb072e61",
"assets/assets/images/screeningTools/Help_Button.png": "c8430b835a8468759e643f76484b8c80",
"assets/assets/images/screeningTools/Person_Circle_1.png": "79aeb7748167f7fb071c2aa09fb2b25f",
"assets/assets/images/screeningTools/Journey_Strip_1.png": "6fc4cabf2fe508ca4ab0c3a650afffbc",
"assets/assets/images/screeningTools/Coolamon_1.png": "85f382402ff601fbbcb0cd4b35f5b0ad",
"assets/assets/images/screeningTools/image_38.png": "bf5a93f48dfd9bfc39e91d913b11681c",
"assets/assets/images/screeningTools/sore-throat_1.png": "8c4368151acec5d2336e09329827bde6",
"assets/assets/images/screeningTools/Cockatoo_1.png": "45e18305a8350df2734bef2db6e240ab",
"assets/assets/images/screeningTools/image_8.png": "60f19d3b8698a09467c8d0e1a87d85ab",
"assets/assets/images/screeningTools/Goanna_Circle_1.png": "7b68f9094dfbd68cc03a8dacbe7e9d75",
"assets/assets/images/screeningTools/image_9.png": "e3e453fb26fc39c33765463615158c27",
"assets/assets/images/screeningTools/Kangaroo_Footprint_Circle_1.png": "098c92082b4393b6f0406cf64c5a7816",
"assets/assets/images/screeningTools/search.png": "293ade778091db38445c300dbed6242f",
"assets/assets/images/screeningTools/X_Ray_Goanna_1.png": "6468c6dca4ffd2175ec83038095617ce",
"assets/assets/images/screeningTools/image_81.png": "e69d75ad25e4078dbf33ade794707776",
"assets/assets/images/screeningTools/skin-sore_6.png": "48efb78703d9a9582cf0b5c133cdbaae",
"assets/assets/images/screeningTools/Screenshot_2024-04-03_at_11.40_1.png": "39bd17562e75d05b5bdc002f1874598b",
"assets/assets/images/screeningTools/image_7.png": "0deba7cc54dcf4387afe15ca9ad83ccb",
"assets/assets/images/screeningTools/X_Ray_Fish_1.png": "c9c9d1767de8a3390ea65aef54b6027e",
"assets/assets/images/screeningTools/Eagle_Circle_1.png": "bccdac53f6082a446dd7d863975ca763",
"assets/assets/images/screeningTools/image_6.png": "861a4322486267abaa7c875dff86e01c",
"assets/assets/images/screeningTools/Group_2217.png": "09ddd755108aacc69edc121f219d7f00",
"assets/assets/images/screeningTools/image_19.png": "b9a1b05ebc598c6c614e5b0afa4cca2e",
"assets/assets/images/screeningTools/Screenshot_2024-04-03_at_11.39_1.png": "f4fe48b6c472b682acb4aada381c145c",
"assets/assets/images/screeningTools/Screenshot_2024-04-03_at_11.41_1.png": "a71611fd59e0604dcfc5544e1bb75d3b",
"assets/assets/images/existingPatient/Follow-Up.pdf": "1177d0169422f1baecdc8c984dddd881",
"assets/assets/images/healthWorkerLogin/image1_371859.png": "bc5656824dcf0bda233513c5d6d4a480",
"assets/assets/images/healthWorkerLogin/image3_611496.png": "118ca7eddaa777d01cc18f9fc22f973d",
"assets/assets/images/healthWorkerLogin/image2_371861.png": "6d66e5c9e2bf4c0e52ef63801b0cbc67",
"assets/assets/images/healthWorkerLogin/image4_611575.png": "ccc319f95aac42afda219bb8a6caa8e6",
"assets/assets/images/healthWorkerLogin/image_1518.png": "ccfb6ac196d1d8e04900a75cbcce3599",
"assets/assets/images/patientProfile/breakline.svg": "fb3b0318affa9ece51075bedad5cc231",
"assets/assets/images/results/image_14.png": "e3505a33c4df5d399708b678b816dbaa",
"assets/assets/images/results/sore_throat_heatmapped.png": "1caac6c042072732e8ddc3060454dff0",
"assets/assets/images/results/image_11.png": "857b3e74b3fc4094993f1efb760b021e",
"assets/assets/images/results/linebreak.png": "79d5840a9c318a6db82e656ff4ceb8b9",
"assets/assets/images/results/sore_throat.png": "af670b326b8105ff54a3fdded6ea4eaa",
"assets/assets/images/mentalHealthCheck/Happy.png": "b74ba7c3ad7da31bdc9b9d7b83b76775",
"assets/assets/images/mentalHealthCheck/Neutral.png": "5ed3f147810fdb2a5d4f09bef5949e1e",
"assets/assets/images/mentalHealthCheck/Sad.png": "a08fcc01250eafd0c37f409b345e3872",
"assets/assets/images/mentalHealthCheck/image3_841687.png": "97041242361e7f990771d553f77cca01",
"assets/assets/images/mentalHealthCheck/image4_6342225.png": "4ab8bd86a50e0742b977f9a71df33201",
"assets/assets/images/mentalHealthCheck/image2_421518.png": "6e66e97dacdd8a38e2e9819801dfba12",
"assets/assets/images/mentalHealthCheck/Content.png": "b7596e9a53547a7936fd52af3cde2320",
"assets/assets/images/mentalHealthCheck/Angry.png": "bc7d2724466f4d478e38ba1df8833dfc",
"assets/assets/images/mentalHealthCheck/image1_16862.png": "40bb8f88014f8de28e372a0aed560087",
"assets/assets/images/mentalHealthCheck/image5_63610797.png": "9f1d3cc64d89866bd839a847eaba87a3",
"assets/assets/images/mentalHealthCheck/image_1536.png": "2aafb1b46cd18af52d6b8dd370c8871f",
"assets/assets/images/resultsExplanation/blood_glucose_fixed.png": "3d842f014be8a805b71ccbd4970cd27e",
"assets/assets/images/resultsExplanation/Meeting%2520Place%25202%25201.png": "6359a551ba6b0b59d870e9f5df8bb2d2",
"assets/assets/images/resultsExplanation/blood_pressure_chart.png": "dd720922c0fa2fa484bc57221e409394",
"assets/assets/images/resultsExplanation/tap.png": "eea1aaefbb20039c2ad5c92adf13a9ec",
"assets/assets/images/resultsExplanation/Person%25201.png": "beb9692ec159afeebe2bb5aab15359a8",
"assets/assets/images/resultsExplanation/blood_glucose_dynamic.png": "20486667d740d2fd7986406ccf7e9b02",
"assets/assets/images/resultsExplanation/image_20.png": "37bc737fe6d7afcb0096023b96d04f62",
"assets/assets/images/resultsExplanation/image_21.png": "4c4713d04734369657bda9c541aa69c3",
"assets/assets/images/resultsExplanation/image_23.png": "416b1a3111aa9b9493e0007e635752a8",
"assets/assets/images/resultsExplanation/image_22.png": "0e7fe60dd260938381a7f72139106aca",
"assets/assets/images/resultsExplanation/image_27.png": "131db92d50ee7ce69a3cb0aaca432811",
"assets/assets/images/resultsExplanation/image_24.png": "2d36361c60e6cae729d76ea073e93c3e",
"assets/assets/images/guidedConsultation/plus.png": "75549ea8176f0c2aca0c5c2a6334eca2",
"assets/assets/images/guidedConsultation/image-40.png": "550fd2fb214a29e634761d279196b1e3",
"assets/assets/images/guidedConsultation/clinical-section-divider-1.svg": "48ff41ba17a8ddc1782d474471dafdc6",
"assets/assets/images/guidedConsultation/social-yarning-divider-1.svg": "acb146a034e114a0d3ce4d4bb423fa2b",
"assets/assets/images/guidedConsultation/social-yarning-divider-2.svg": "45246d4372711766540dee8f7cbe50e4",
"assets/assets/images/guidedConsultation/image-10.png": "45f6775789e46d80e311d08faf57e1ae",
"assets/assets/images/guidedConsultation/chevron-left.png": "1719641ec8d808f83eccb84f0786e9d0",
"assets/assets/images/guidedConsultation/image-39.png": "f15b0d0316205df5de8174f8534e9d76",
"assets/assets/images/homeScreen/image1_1575.png": "f198900f2a1d392da760e6da48b5a908",
"assets/assets/images/homeScreen/image_1574.png": "30db9eee54779570e2a79787284ad6d5",
"assets/assets/images/homeScreen/image_1566.png": "61d907eadeba3c3a7fbc66a3e6df2623",
"assets/assets/images/homeScreen/image_1570.png": "e424c9367020eaef96c6a7a48957aad7",
"assets/assets/images/homeScreen/image3_841827.png": "6ef61c7787cfe35743eaa631242ca05d",
"assets/assets/images/homeScreen/image2_841792.png": "ccf0e4df8e79f32a4270e917ec4c3a4f",
"assets/assets/images/homeScreen/image4_4872251.png": "4ab8bd86a50e0742b977f9a71df33201",
"assets/assets/images/homeScreen/image5_63610792.png": "9f1d3cc64d89866bd839a847eaba87a3",
"assets/assets/fonts/Inter-VariableFont_opsz,wght.ttf": "0a77e23a8fdbe6caefd53cb04c26fabc",
"assets/assets/fonts/VarelaRound-Regular.ttf": "3c3c18c24b0bd85a303bc3f2581d53fc",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
