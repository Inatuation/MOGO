/*
Navicat MySQL Data Transfer

Source Server         : YOGA
Source Server Version : 50714
Source Host           : localhost:3306
Source Database       : mogo

Target Server Type    : MYSQL
Target Server Version : 50714
File Encoding         : 65001

Date: 2019-05-19 20:19:28
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for appraise
-- ----------------------------
DROP TABLE IF EXISTS `appraise`;
CREATE TABLE `appraise` (
  `cname` varchar(255) DEFAULT NULL,
  `gid` varchar(255) DEFAULT NULL,
  `content` varchar(255) DEFAULT NULL,
  `time` varchar(255) DEFAULT NULL,
  `color` varchar(255) DEFAULT NULL,
  `size` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of appraise
-- ----------------------------
INSERT INTO `appraise` VALUES ('yoga1', '1', '很棒的购物体验1', '2016年4月25', '红色', 'M');
INSERT INTO `appraise` VALUES ('yoga2', '2', '很棒的购物体验2', '2016年4月25', '黄色', 'L');
INSERT INTO `appraise` VALUES ('yoga3', '3', '很棒的购物体验3', '2016年4月25', '绿色', 'S');
INSERT INTO `appraise` VALUES ('yoga4', '4', '很棒的购物体验4', '2016年4月25', '红色', 'M');
INSERT INTO `appraise` VALUES ('yoga5', '5', '很棒的购物体验5', '2016年4月25', '黄色', 'L');
INSERT INTO `appraise` VALUES ('yoga6', '6', '很棒的购物体验6', '2016年4月25', '绿色', 'S');
INSERT INTO `appraise` VALUES ('yoga7', '7', '很棒的购物体验7', '2016年4月25', '红色', 'M');
INSERT INTO `appraise` VALUES ('yoga8', '8', '很棒的购物体验8', '2016年4月25', '黄色', 'L');
INSERT INTO `appraise` VALUES ('yoga9', '9', '很棒的购物体验9', '2016年4月25', '绿色', 'S');
INSERT INTO `appraise` VALUES ('yoga10', '10', '很棒的购物体验10', '2016年4月25', '红色', 'M');
INSERT INTO `appraise` VALUES ('yoga11', '11', '很棒的购物体验11', '2016年4月25', '黄色', 'L');
INSERT INTO `appraise` VALUES ('yoga12', '12', '很棒的购物体验12', '2016年4月25', '绿色', 'S');
INSERT INTO `appraise` VALUES ('yoga13', '13', '很棒的购物体验13', '2016年4月25', '红色', 'M');
INSERT INTO `appraise` VALUES ('yoga14', '14', '很棒的购物体验14', '2016年4月25', '黄色', 'L');
INSERT INTO `appraise` VALUES ('yoga15', '15', '很棒的购物体验15', '2016年4月25', '绿色', 'S');

-- ----------------------------
-- Table structure for dianpu
-- ----------------------------
DROP TABLE IF EXISTS `dianpu`;
CREATE TABLE `dianpu` (
  `sname` varchar(255) DEFAULT NULL,
  `city` varchar(255) DEFAULT NULL,
  `fans` varchar(255) DEFAULT NULL,
  `guanzhu` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of dianpu
-- ----------------------------
INSERT INTO `dianpu` VALUES ('HM', '广州', '1851', '6541');
INSERT INTO `dianpu` VALUES ('LOEWE', '上海', '6484', '6126');
INSERT INTO `dianpu` VALUES ('夏梵尼', '北京', '9874', '5191');
INSERT INTO `dianpu` VALUES ('衣阁里拉', '杭州', '9854', '8416');
INSERT INTO `dianpu` VALUES ('韩都衣舍', '深圳', '2164', '6541');
INSERT INTO `dianpu` VALUES ('Boba奶绿', '武汉', '1265', '5249');
INSERT INTO `dianpu` VALUES ('ZARA', '河源', '3541', '3723');
INSERT INTO `dianpu` VALUES ('小红人', '湛江', '9684', '3874');
INSERT INTO `dianpu` VALUES ('Golden', '内蒙古', '3877', '3576');
INSERT INTO `dianpu` VALUES ('四幕ISMOO', '香港', '2769', '2981');
INSERT INTO `dianpu` VALUES ('HM1', '广州', '1851', '6541');
INSERT INTO `dianpu` VALUES ('LOEWE1', '上海', '6484', '6126');
INSERT INTO `dianpu` VALUES ('夏梵尼1', '北京', '9874', '5191');
INSERT INTO `dianpu` VALUES ('衣阁里拉1', '杭州', '9854', '8416');
INSERT INTO `dianpu` VALUES ('韩都衣舍1', '深圳', '2164', '6541');
INSERT INTO `dianpu` VALUES ('Boba奶绿1', '武汉', '1265', '5249');
INSERT INTO `dianpu` VALUES ('ZARA1', '河源', '3541', '3723');
INSERT INTO `dianpu` VALUES ('小红人1', '湛江', '9684', '3874');
INSERT INTO `dianpu` VALUES ('Golden1', '内蒙古', '3877', '3576');
INSERT INTO `dianpu` VALUES ('四幕ISMOO1', '香港', '2769', '2981');

-- ----------------------------
-- Table structure for liuyanban
-- ----------------------------
DROP TABLE IF EXISTS `liuyanban`;
CREATE TABLE `liuyanban` (
  `gid` varchar(255) DEFAULT NULL,
  `liuyanname` varchar(255) DEFAULT NULL,
  `time` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `content` varchar(255) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of liuyanban
-- ----------------------------
INSERT INTO `liuyanban` VALUES ('1', '明明一号', '2019-05-15 11:18:58', '商品1的留言');
INSERT INTO `liuyanban` VALUES ('2', '明明二号', '2019-05-04 11:19:03', '商品2的留言');
INSERT INTO `liuyanban` VALUES ('3', '明明三号', '2019-05-06 11:19:08', '商品3的留言');
INSERT INTO `liuyanban` VALUES ('4', '明明四号', '2019-05-28 11:19:12', '商品4的留言');
INSERT INTO `liuyanban` VALUES ('5', '明明五号', '2019-06-08 11:19:15', '商品5的留言');
INSERT INTO `liuyanban` VALUES ('6', '明明六号', '2019-04-23 11:19:19', '商品6的留言');
INSERT INTO `liuyanban` VALUES ('7', '明明七号', '2019-05-21 11:19:24', '商品7的留言');
INSERT INTO `liuyanban` VALUES ('8', '明明八号', '2019-05-04 11:19:27', '商品8的留言');
INSERT INTO `liuyanban` VALUES ('9', '明明九号', '2019-05-07 11:19:30', '商品9的留言');
INSERT INTO `liuyanban` VALUES ('10', '明明十号', '2019-05-11 11:19:34', '商品10的留言');
INSERT INTO `liuyanban` VALUES ('11', '明明十一号', '2019-05-14 11:19:37', '商品11的留言');
INSERT INTO `liuyanban` VALUES ('12', '明明十二号', '2019-05-20 11:19:42', '商品12的留言');
INSERT INTO `liuyanban` VALUES ('13', '明明十三号', '2019-05-18 11:19:45', '商品13的留言');
INSERT INTO `liuyanban` VALUES ('14', '明明十四号', '2019-05-02 11:19:48', '商品14的留言');
INSERT INTO `liuyanban` VALUES ('15', '明明十五号', '2019-05-01 11:19:55', '商品15的留言');

-- ----------------------------
-- Table structure for seller&goods
-- ----------------------------
DROP TABLE IF EXISTS `seller&goods`;
CREATE TABLE `seller&goods` (
  `sid` varchar(255) DEFAULT NULL,
  `sname` varchar(255) DEFAULT NULL,
  `gid` varchar(255) NOT NULL,
  `gname` varchar(255) DEFAULT NULL,
  `oldprice` varchar(255) DEFAULT NULL,
  `newprice` varchar(255) DEFAULT NULL,
  `stock` varchar(255) DEFAULT NULL,
  `zan` varchar(255) DEFAULT NULL,
  `house` varchar(255) DEFAULT NULL,
  `sell` varchar(255) DEFAULT NULL,
  `images` varchar(255) DEFAULT NULL,
  `otherimg` varchar(255) DEFAULT NULL,
  `judge` varchar(255) DEFAULT NULL,
  `tag` varchar(255) DEFAULT NULL,
  `appr` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`gid`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of seller&goods
-- ----------------------------
INSERT INTO `seller&goods` VALUES ('1', 'HM', '1', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子1', '99', '69', '762', '113', '60', '587', 'images/ppl0.jpg', 'images/ppl10.jpg', '1', 'Li Ning&ZARA', '56');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE', '2', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子2', '88', '78', '859', '121', '72', '644', 'images/ppl1.jpg', 'images/ppl11.jpg', '2', 'GUCCi&Hermes&Supreme', '45');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼', '3', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙3', '153', '172', '956', '149', '94', '701', 'images/ppl2.jpg', 'images/ppl12.jpg', '3', '小尼力&LOEWE', '12');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉', '4', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙4', '167', '209', '1053', '164', '100', '758', 'images/ppl3.jpg', 'images/ppl13.jpg', '4', 'AS NESH', '12');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍', '5', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子5', '194', '260', '1150', '180', '114', '815', 'images/ppl4.jpg', 'images/ppl14.jpg', '5', 'VANS', '45');
INSERT INTO `seller&goods` VALUES ('1', 'HM', '6', '好质量~牛仔半身裙女2019新款中长款鱼尾裙高腰a字裙ins超火裙子', '221', '312', '1247', '200', '128', '872', 'images/ppl5.jpg', 'images/ppl15.jpg', '6', 'converse&REOCHA', '12');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE', '7', 'chic韩版夏季女装新款高腰显瘦中长款雪纺裙荷叶边半身裙子', '248', '363', '1344', '220', '142', '929', 'images/ppl6.jpg', 'images/ppl16.jpg', '7', 'BLUELAND', '45');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼', '8', '夏季女装新款码蕾丝花边拼接绣花a字半身裙女包臀牛仔半身裙百搭裙子', '275', '415', '1441', '260', '156', '986', 'images/ppl7.jpg', 'images/ppl17.jpg', '8', 'CARIEDO&STUDIO', '13');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉', '9', '黑色气质连衣裙2019春夏新款女装韩版修身百搭宽松显瘦中长款雪纺裙赫本小黑裙子', '302', '466', '1538', '260', '170', '1043', 'images/ppl8.jpg', 'images/ppl18.jpg', '9', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '45');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍', '10', '夏季新款韩版小清新时尚钉珠高腰不规则a字牛仔裙显瘦半身裙短裙潮女裙子', '329', '518', '1635', '280', '189', '1100', 'images/ppl9.jpg', 'images/ppl20.jpg', '10', 'adidas', '45');
INSERT INTO `seller&goods` VALUES ('1', 'HM', '11', '韩版气质百搭ulzzang下摆打结扭花短款露脐修身短袖T恤女裙子', '57', '39.9', '241', '545', '151', '5894', 'images/ppl21.jpg', 'images/ppl22.jpg', '11', 'THE GREAT YOGA', '31');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE', '12', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙裙子', '70', '49', '254', '184', '945', '1894', 'images/ppl23.jpg', 'images/ppl24.jpg', '12', 'LISA&adidas Originals', '12');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼', '13', '灰色毛边网红同款a字裤高腰破洞牛仔短裤女学生宽松阔腿热裤2019夏新款裙子', '57', '39.9', '456', '123', '451', '651', 'images/ppl25.jpg', 'images/ppl26.jpg', '13', 'URBAN REVIVO&NAOAO CLUB', '645');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉', '14', '港味夏季2019新款高腰阔腿毛边高腰牛仔短裤chic短裤女韩国学生蓝色百搭显瘦热裤裙子', '80', '59.5', '641', '104', '4658', '423', 'images/ppl27.jpg', 'images/ppl28.jpg', '14', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '123');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍', '15', '短裤夏季女2018新款韩版时尚百搭宽松个性破洞毛边学生休闲显瘦高腰灰色牛仔A字热裤女夏裙子', '103', '29.9', '564', '328', '124', '453', 'images/ppl29.jpg', 'images/ppl30.jpg', '15', 'littledry&CONVERSE', '45');
INSERT INTO `seller&goods` VALUES ('1', 'HM', '16', 't恤女短袖夏装2019新款潮韩版宽松白色半袖体恤百搭潮打底衫上衣', '126', '65', '652', '465', '131', '483', 'images/ppl31.jpg', 'images/ppl32.jpg', '16', 'Li Ning&ZARA', '181.352380952381');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE', '17', '夏新款小谷粒五角星圈圈印花宽松休闲显瘦中长款长袖轻薄防晒衬衫上衣', '149', '85', '740', '602', '138', '513', 'images/ppl33.jpg', 'images/ppl34.jpg', '17', 'GUCCi&Hermes&Supreme', '194.138095238096');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼', '18', '防晒衣女短款夏季蝴蝶结学生连帽防晒服开衫长袖宽松百搭薄款外套上衣', '172', '105', '828', '739', '145', '543', 'images/ppl35.jpg', 'images/ppl36.jpg', '18', '小尼力&LOEWE', '206.92380952381');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉', '19', '夏季韩范V领修身上衣服褶皱白色短袖T恤百搭短款洋气打底小衫女上衣', '195', '125', '916', '876', '152', '573', 'images/ppl37.jpg', 'images/ppl38.jpg', '19', 'AS NESH', '219.709523809524');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍', '20', '夏季韩范新款交叉V领五分袖纽扣收腰显瘦小心机白色衬衫上衣', '218', '145', '1004', '1013', '159', '603', 'images/ppl39.jpg', 'images/ppl40.jpg', '20', 'VANS', '232.495238095238');
INSERT INTO `seller&goods` VALUES ('1', 'HM', '21', '2019春夏新款小清新宽松显瘦背后开叉V领衬衣韩版女装休闲条纹九分袖衬衫上衣', '241', '165', '1092', '1150', '166', '633', 'images/ppl41.jpg', 'images/ppl42.jpg', '21', 'converse&REOCHA', '245.280952380953');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE', '22', '2019春夏新款短袖t恤女宽松学生百搭纯色打底体恤玫瑰刺绣紧身喇叭袖上衣', '264', '185', '1180', '1287', '173', '663', 'images/ppl43.jpg', 'images/ppl44.jpg', '22', 'BLUELAND', '258.066666666667');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼', '23', '夏季港风宽松纯棉短袖女装韩版潮流印花T恤学生五分袖百搭上衣', '287', '205', '1268', '1424', '180', '693', 'images/ppl45.jpg', 'images/ppl46.jpg', '23', 'CARIEDO&STUDIO', '270.852380952381');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉', '24', '防晒衣女士中长款夏季2019新款韩版宽松时尚沙滩开衫百搭外套上衣', '310', '225', '1356', '1561', '187', '723', 'images/ppl47.jpg', 'images/ppl48.jpg', '24', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '283.638095238095');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍', '25', '衬衣夏季韩国原宿风宽松百搭轻薄开衫外套显瘦白色蝙蝠袖防晒衣女上衣', '333', '245', '1444', '1698', '194', '753', 'images/ppl49.jpg', 'images/ppl50.jpg', '25', 'adidas', '296.42380952381');
INSERT INTO `seller&goods` VALUES ('1', 'HM', '26', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣1', '356', '265', '1532', '1835', '201', '783', 'images/ppl51.jpg', 'images/ppl52.jpg', '26', 'THE GREAT YOGA', '309.209523809524');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE', '27', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣2', '379', '285', '1620', '1972', '208', '813', 'images/ppl53.jpg', 'images/ppl54.jpg', '27', 'LISA&adidas Originals', '321.995238095238');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼', '28', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣3', '402', '305', '1708', '2109', '215', '843', 'images/ppl55.jpg', 'images/ppl56.jpg', '28', 'URBAN REVIVO&NAOAO CLUB', '334.780952380953');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉', '29', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣4', '425', '325', '1796', '2246', '222', '873', 'images/ppl57.jpg', 'images/ppl58.jpg', '29', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '347.566666666667');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍', '30', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣5', '448', '345', '1884', '2383', '229', '903', 'images/ppl59.jpg', 'images/ppl60.jpg', '30', 'littledry&CONVERSE', '360.352380952381');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿', '31', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣2', '471', '365', '1972', '2520', '236', '933', 'images/ppl31.jpg', 'images/ppl32.jpg', '31', 'Li Ning&ZARA', '373.138095238095');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA', '32', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣3', '494', '385', '2060', '2661', '243', '963', 'images/ppl33.jpg', 'images/ppl34.jpg', '32', 'GUCCi&Hermes&Supreme', '385.923809523809');
INSERT INTO `seller&goods` VALUES ('8', '小红人', '33', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣4', '517', '405', '2148', '2794', '250', '993', 'images/ppl35.jpg', 'images/ppl36.jpg', '33', '小尼力&LOEWE', '398.709523809523');
INSERT INTO `seller&goods` VALUES ('9', 'Golden', '34', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣5', '540', '425', '2236', '2931', '257', '1023', 'images/ppl37.jpg', 'images/ppl38.jpg', '34', 'AS NESH', '411.495238095237');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO', '35', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣6', '563', '445', '2324', '3068', '264', '1053', 'images/ppl39.jpg', 'images/ppl40.jpg', '35', 'VANS', '424.280952380951');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿', '36', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣3', '586', '465', '2412', '3205', '271', '1083', 'images/ppl41.jpg', 'images/ppl42.jpg', '36', 'converse&REOCHA', '437.066666666665');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA', '37', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣4', '609', '485', '2500', '3342', '278', '1113', 'images/ppl43.jpg', 'images/ppl44.jpg', '37', 'BLUELAND', '449.852380952379');
INSERT INTO `seller&goods` VALUES ('8', '小红人', '38', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣5', '632', '505', '2588', '3479', '285', '1143', 'images/ppl45.jpg', 'images/ppl46.jpg', '38', 'CARIEDO&STUDIO', '462.638095238093');
INSERT INTO `seller&goods` VALUES ('9', 'Golden', '39', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣6', '655', '525', '2676', '3616', '292', '1173', 'images/ppl47.jpg', 'images/ppl48.jpg', '39', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '475.423809523807');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO', '40', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣7', '678', '545', '2764', '3753', '299', '1203', 'images/ppl49.jpg', 'images/ppl50.jpg', '40', 'adidas', '488.209523809521');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿', '41', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣4', '701', '565', '2852', '3890', '306', '1233', 'images/ppl51.jpg', 'images/ppl52.jpg', '41', 'THE GREAT YOGA', '500.995238095235');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA', '42', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣5', '724', '585', '2940', '4027', '313', '1263', 'images/ppl53.jpg', 'images/ppl54.jpg', '42', 'LISA&adidas Originals', '513.780952380949');
INSERT INTO `seller&goods` VALUES ('8', '小红人', '43', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣6', '747', '605', '3028', '4164', '320', '1293', 'images/ppl55.jpg', 'images/ppl56.jpg', '43', 'URBAN REVIVO&NAOAO CLUB', '526.566666666663');
INSERT INTO `seller&goods` VALUES ('9', 'Golden', '44', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣7', '770', '625', '3116', '4301', '327', '1323', 'images/ppl57.jpg', 'images/ppl58.jpg', '44', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '539.352380952377');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO', '45', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣8', '793', '645', '3204', '4438', '334', '1353', 'images/ppl59.jpg', 'images/ppl60.jpg', '45', 'littledry&CONVERSE', '552.138095238091');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿', '46', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子6', '816', '665', '3292', '4575', '341', '1383', 'images/ppl0.jpg', 'images/ppl10.jpg', '46', 'Li Ning&ZARA', '564.923809523805');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA', '47', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子7', '839', '685', '3380', '4712', '348', '1413', 'images/ppl1.jpg', 'images/ppl11.jpg', '47', 'GUCCi&Hermes&Supreme', '577.709523809519');
INSERT INTO `seller&goods` VALUES ('8', '小红人', '48', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙8', '862', '705', '3468', '4849', '355', '1443', 'images/ppl2.jpg', 'images/ppl12.jpg', '48', '小尼力&LOEWE', '590.495238095233');
INSERT INTO `seller&goods` VALUES ('9', 'Golden', '49', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙9', '885', '725', '3556', '4986', '362', '1473', 'images/ppl3.jpg', 'images/ppl13.jpg', '49', 'AS NESH', '603.280952380947');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO', '50', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子10', '908', '745', '3644', '5123', '369', '1503', 'images/ppl4.jpg', 'images/ppl14.jpg', '50', 'VANS', '616.066666666661');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿', '51', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子11', '931', '765', '3732', '5260', '376', '1533', 'images/ppl5.jpg', 'images/ppl15.jpg', '51', 'converse&REOCHA', '628.852380952375');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA', '52', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子12', '954', '785', '3820', '5397', '383', '1563', 'images/ppl6.jpg', 'images/ppl16.jpg', '52', 'BLUELAND', '641.638095238089');
INSERT INTO `seller&goods` VALUES ('8', '小红人', '53', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙13', '977', '805', '3908', '5534', '390', '1593', 'images/ppl7.jpg', 'images/ppl17.jpg', '53', 'CARIEDO&STUDIO', '654.423809523803');
INSERT INTO `seller&goods` VALUES ('9', 'Golden', '54', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙14', '1000', '825', '3996', '5671', '397', '1623', 'images/ppl8.jpg', 'images/ppl18.jpg', '54', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '667.209523809517');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO', '55', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子15', '1023', '845', '4084', '5808', '404', '1653', 'images/ppl9.jpg', 'images/ppl20.jpg', '55', 'adidas', '679.995238095231');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿', '56', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子16', '1046', '865', '4172', '5945', '411', '1683', 'images/ppl21.jpg', 'images/ppl22.jpg', '56', 'THE GREAT YOGA', '692.780952380945');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA', '57', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子17', '1069', '885', '4260', '6082', '418', '1713', 'images/ppl23.jpg', 'images/ppl24.jpg', '57', 'LISA&adidas Originals', '705.566666666659');
INSERT INTO `seller&goods` VALUES ('8', '小红人', '58', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙18', '1092', '905', '4348', '6219', '425', '1743', 'images/ppl25.jpg', 'images/ppl26.jpg', '58', 'URBAN REVIVO&NAOAO CLUB', '718.352380952373');
INSERT INTO `seller&goods` VALUES ('9', 'Golden', '59', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙19', '1115', '925', '4436', '6356', '432', '1773', 'images/ppl27.jpg', 'images/ppl28.jpg', '59', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '731.138095238087');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO', '60', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子20', '1138', '945', '4524', '6493', '439', '1803', 'images/ppl29.jpg', 'images/ppl30.jpg', '60', 'littledry&CONVERSE', '743.923809523801');
INSERT INTO `seller&goods` VALUES ('1', 'HM1', '61', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子1', '1161', '965', '4612', '6630', '446', '1833', 'images/ppl0.jpg', 'images/ppl10.jpg', '61', 'Li Ning&ZARA', '756.709523809515');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE1', '62', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子2', '1184', '985', '4700', '6767', '453', '1863', 'images/ppl1.jpg', 'images/ppl11.jpg', '62', 'GUCCi&Hermes&Supreme', '769.495238095229');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼1', '63', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙3', '1207', '1005', '4788', '6904', '460', '1893', 'images/ppl2.jpg', 'images/ppl12.jpg', '63', '小尼力&LOEWE', '782.280952380943');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉1', '64', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙4', '1230', '1025', '4876', '7041', '467', '1923', 'images/ppl3.jpg', 'images/ppl13.jpg', '64', 'AS NESH', '795.066666666657');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍1', '65', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子5', '1253', '1045', '4964', '7178', '474', '1953', 'images/ppl4.jpg', 'images/ppl14.jpg', '65', 'VANS', '807.852380952371');
INSERT INTO `seller&goods` VALUES ('1', 'HM1', '66', '好质量~牛仔半身裙女2019新款中长款鱼尾裙高腰a字裙ins超火裙子', '1276', '1065', '5052', '7315', '481', '1983', 'images/ppl5.jpg', 'images/ppl15.jpg', '66', 'converse&REOCHA', '820.638095238085');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE1', '67', 'chic韩版夏季女装新款高腰显瘦中长款雪纺裙荷叶边半身裙子', '1299', '1085', '5140', '7452', '488', '2013', 'images/ppl6.jpg', 'images/ppl16.jpg', '67', 'BLUELAND', '833.423809523799');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼1', '68', '夏季女装新款码蕾丝花边拼接绣花a字半身裙女包臀牛仔半身裙百搭裙子', '1322', '1105', '5228', '7589', '495', '2043', 'images/ppl7.jpg', 'images/ppl17.jpg', '68', 'CARIEDO&STUDIO', '846.209523809513');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉1', '69', '黑色气质连衣裙2019春夏新款女装韩版修身百搭宽松显瘦中长款雪纺裙赫本小黑裙子', '1345', '1125', '5316', '7726', '502', '2073', 'images/ppl8.jpg', 'images/ppl18.jpg', '69', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '858.995238095227');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍1', '70', '夏季新款韩版小清新时尚钉珠高腰不规则a字牛仔裙显瘦半身裙短裙潮女裙子', '1368', '1145', '5404', '7863', '509', '2103', 'images/ppl9.jpg', 'images/ppl20.jpg', '70', 'adidas', '871.780952380941');
INSERT INTO `seller&goods` VALUES ('1', 'HM1', '71', '韩版气质百搭ulzzang下摆打结扭花短款露脐修身短袖T恤女裙子', '1391', '1165', '5492', '8000', '516', '2133', 'images/ppl21.jpg', 'images/ppl22.jpg', '71', 'THE GREAT YOGA', '884.566666666655');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE1', '72', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙裙子', '1414', '1185', '5580', '8137', '523', '2163', 'images/ppl23.jpg', 'images/ppl24.jpg', '72', 'LISA&adidas Originals', '897.352380952369');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼1', '73', '灰色毛边网红同款a字裤高腰破洞牛仔短裤女学生宽松阔腿热裤2019夏新款裙子', '1437', '1205', '5668', '8274', '530', '2193', 'images/ppl25.jpg', 'images/ppl26.jpg', '73', 'URBAN REVIVO&NAOAO CLUB', '910.138095238083');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉1', '74', '港味夏季2019新款高腰阔腿毛边高腰牛仔短裤chic短裤女韩国学生蓝色百搭显瘦热裤裙子', '1460', '1225', '5756', '8411', '537', '2223', 'images/ppl27.jpg', 'images/ppl28.jpg', '74', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '922.923809523797');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍1', '75', '短裤夏季女2018新款韩版时尚百搭宽松个性破洞毛边学生休闲显瘦高腰灰色牛仔A字热裤女夏裙子', '1483', '1245', '5844', '8548', '544', '2253', 'images/ppl29.jpg', 'images/ppl30.jpg', '75', 'littledry&CONVERSE', '935.709523809511');
INSERT INTO `seller&goods` VALUES ('1', 'HM1', '76', 't恤女短袖夏装2019新款潮韩版宽松白色半袖体恤百搭潮打底衫上衣', '1506', '1265', '5932', '8685', '551', '2283', 'images/ppl31.jpg', 'images/ppl32.jpg', '76', 'Li Ning&ZARA', '948.495238095225');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE1', '77', '夏新款小谷粒五角星圈圈印花宽松休闲显瘦中长款长袖轻薄防晒衬衫上衣', '1529', '1285', '6020', '8822', '558', '2313', 'images/ppl33.jpg', 'images/ppl34.jpg', '77', 'GUCCi&Hermes&Supreme', '961.280952380939');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼1', '78', '防晒衣女短款夏季蝴蝶结学生连帽防晒服开衫长袖宽松百搭薄款外套上衣', '1552', '1305', '6108', '8959', '565', '2343', 'images/ppl35.jpg', 'images/ppl36.jpg', '78', '小尼力&LOEWE', '974.066666666653');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉1', '79', '夏季韩范V领修身上衣服褶皱白色短袖T恤百搭短款洋气打底小衫女上衣', '1575', '1325', '6196', '9096', '572', '2373', 'images/ppl37.jpg', 'images/ppl38.jpg', '79', 'AS NESH', '986.852380952367');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍1', '80', '夏季韩范新款交叉V领五分袖纽扣收腰显瘦小心机白色衬衫上衣', '1598', '1345', '6284', '9233', '579', '2403', 'images/ppl39.jpg', 'images/ppl40.jpg', '80', 'VANS', '999.638095238081');
INSERT INTO `seller&goods` VALUES ('1', 'HM1', '81', '2019春夏新款小清新宽松显瘦背后开叉V领衬衣韩版女装休闲条纹九分袖衬衫上衣', '1621', '1365', '6372', '9370', '586', '2433', 'images/ppl41.jpg', 'images/ppl42.jpg', '81', 'converse&REOCHA', '1012.42380952379');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE1', '82', '2019春夏新款短袖t恤女宽松学生百搭纯色打底体恤玫瑰刺绣紧身喇叭袖上衣', '1644', '1385', '6460', '9507', '593', '2463', 'images/ppl43.jpg', 'images/ppl44.jpg', '82', 'BLUELAND', '1025.20952380951');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼1', '83', '夏季港风宽松纯棉短袖女装韩版潮流印花T恤学生五分袖百搭上衣', '1667', '1405', '6548', '9644', '600', '2493', 'images/ppl45.jpg', 'images/ppl46.jpg', '83', 'CARIEDO&STUDIO', '1037.99523809522');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉1', '84', '防晒衣女士中长款夏季2019新款韩版宽松时尚沙滩开衫百搭外套上衣', '1690', '1425', '6636', '9781', '607', '2523', 'images/ppl47.jpg', 'images/ppl48.jpg', '84', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '1050.78095238094');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍1', '85', '衬衣夏季韩国原宿风宽松百搭轻薄开衫外套显瘦白色蝙蝠袖防晒衣女上衣', '1713', '1445', '6724', '9918', '614', '2553', 'images/ppl49.jpg', 'images/ppl50.jpg', '85', 'adidas', '1063.56666666665');
INSERT INTO `seller&goods` VALUES ('1', 'HM1', '86', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣1', '1736', '1465', '6812', '10055', '621', '2583', 'images/ppl51.jpg', 'images/ppl52.jpg', '86', 'THE GREAT YOGA', '1076.35238095236');
INSERT INTO `seller&goods` VALUES ('2', 'LOEWE1', '87', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣2', '1759', '1485', '6900', '10192', '628', '2613', 'images/ppl53.jpg', 'images/ppl54.jpg', '87', 'LISA&adidas Originals', '1089.13809523808');
INSERT INTO `seller&goods` VALUES ('3', '夏梵尼1', '88', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣3', '1782', '1505', '6988', '10329', '635', '2643', 'images/ppl55.jpg', 'images/ppl56.jpg', '88', 'URBAN REVIVO&NAOAO CLUB', '1101.92380952379');
INSERT INTO `seller&goods` VALUES ('4', '衣阁里拉1', '89', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣4', '1805', '1525', '7076', '10466', '642', '2673', 'images/ppl57.jpg', 'images/ppl58.jpg', '89', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '1114.70952380951');
INSERT INTO `seller&goods` VALUES ('5', '韩都衣舍1', '90', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣5', '1828', '1545', '7164', '10603', '649', '2703', 'images/ppl59.jpg', 'images/ppl60.jpg', '90', 'littledry&CONVERSE', '1127.49523809522');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿1', '91', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣2', '1851', '1565', '7252', '10740', '656', '2733', 'images/ppl31.jpg', 'images/ppl32.jpg', '91', 'Li Ning&ZARA', '1140.28095238094');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA1', '92', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣3', '1874', '1585', '7340', '10877', '663', '2763', 'images/ppl33.jpg', 'images/ppl34.jpg', '92', 'GUCCi&Hermes&Supreme', '1153.06666666665');
INSERT INTO `seller&goods` VALUES ('8', '小红人1', '93', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣4', '1897', '1605', '7428', '11014', '670', '2793', 'images/ppl35.jpg', 'images/ppl36.jpg', '93', '小尼力&LOEWE', '1165.85238095236');
INSERT INTO `seller&goods` VALUES ('9', 'Golden1', '94', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣5', '1920', '1625', '7516', '11151', '677', '2823', 'images/ppl37.jpg', 'images/ppl38.jpg', '94', 'AS NESH', '1178.63809523808');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO1', '95', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣6', '1943', '1645', '7604', '11288', '684', '2853', 'images/ppl39.jpg', 'images/ppl40.jpg', '95', 'VANS', '1191.42380952379');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿1', '96', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣3', '1966', '1665', '7692', '11425', '691', '2883', 'images/ppl41.jpg', 'images/ppl42.jpg', '96', 'converse&REOCHA', '1204.2095238095');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA1', '97', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣4', '1989', '1685', '7780', '11562', '698', '2913', 'images/ppl43.jpg', 'images/ppl44.jpg', '97', 'BLUELAND', '1216.99523809522');
INSERT INTO `seller&goods` VALUES ('8', '小红人1', '98', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣5', '2012', '1705', '7868', '11699', '705', '2943', 'images/ppl45.jpg', 'images/ppl46.jpg', '98', 'CARIEDO&STUDIO', '1229.78095238093');
INSERT INTO `seller&goods` VALUES ('9', 'Golden1', '99', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣6', '2035', '1725', '7956', '11836', '712', '2973', 'images/ppl47.jpg', 'images/ppl48.jpg', '99', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '1242.56666666665');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO1', '100', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣7', '2058', '1745', '8044', '11973', '719', '3003', 'images/ppl49.jpg', 'images/ppl50.jpg', '100', 'adidas', '1255.35238095236');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿1', '101', '2019夏季中长款韩版宽松短袖女T恤假两件拼接吊带背心上衣4', '2081', '1765', '8132', '12110', '726', '3033', 'images/ppl51.jpg', 'images/ppl52.jpg', '101', 'THE GREAT YOGA', '1268.13809523808');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA1', '102', '春夏装2019韩版V领纯色蝙蝠袖收腰不规则下摆褶皱休闲衬衫上衣5', '2104', '1785', '8220', '12247', '733', '3063', 'images/ppl53.jpg', 'images/ppl54.jpg', '102', 'LISA&adidas Originals', '1280.92380952379');
INSERT INTO `seller&goods` VALUES ('8', '小红人1', '103', '情侣装防晒衣2019春夏新款韩版防晒衣女宽松百搭字母刺绣学生长袖短款外套上衣6', '2127', '1805', '8308', '12384', '740', '3093', 'images/ppl55.jpg', 'images/ppl56.jpg', '103', 'URBAN REVIVO&NAOAO CLUB', '1293.7095238095');
INSERT INTO `seller&goods` VALUES ('9', 'Golden1', '104', '气质韩版新款夏装宽松豹子港风t恤女短袖ins潮百搭白色上衣7', '2150', '1825', '8396', '12521', '747', '3123', 'images/ppl57.jpg', 'images/ppl58.jpg', '104', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '1306.49523809522');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO1', '105', '时尚外套女春季新款韩版宽松街头风条纹撞色休闲中长款上衣女士显瘦时尚夏装个性休闲长袖衬衫上衣8', '2173', '1845', '8484', '12658', '754', '3153', 'images/ppl59.jpg', 'images/ppl60.jpg', '105', 'littledry&CONVERSE', '1319.28095238093');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿1', '106', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子6', '2196', '1865', '8572', '12795', '761', '3183', 'images/ppl0.jpg', 'images/ppl10.jpg', '106', 'Li Ning&ZARA', '1332.06666666665');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA1', '107', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子7', '2219', '1885', '8660', '12932', '768', '3213', 'images/ppl1.jpg', 'images/ppl11.jpg', '107', 'GUCCi&Hermes&Supreme', '1344.85238095236');
INSERT INTO `seller&goods` VALUES ('8', '小红人1', '108', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙8', '2242', '1905', '8748', '13069', '775', '3243', 'images/ppl2.jpg', 'images/ppl12.jpg', '108', '小尼力&LOEWE', '1357.63809523807');
INSERT INTO `seller&goods` VALUES ('9', 'Golden1', '109', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙9', '2265', '1925', '8836', '13206', '782', '3273', 'images/ppl3.jpg', 'images/ppl13.jpg', '109', 'AS NESH', '1370.42380952379');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO1', '110', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子10', '2288', '1945', '8924', '13343', '789', '3303', 'images/ppl4.jpg', 'images/ppl14.jpg', '110', 'VANS', '1383.2095238095');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿1', '111', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子11', '2311', '1965', '9012', '13480', '796', '3333', 'images/ppl5.jpg', 'images/ppl15.jpg', '111', 'converse&REOCHA', '1395.99523809521');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA1', '112', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子12', '2334', '1985', '9100', '13617', '803', '3363', 'images/ppl6.jpg', 'images/ppl16.jpg', '112', 'BLUELAND', '1408.78095238093');
INSERT INTO `seller&goods` VALUES ('8', '小红人1', '113', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙13', '2357', '2005', '9188', '13754', '810', '3393', 'images/ppl7.jpg', 'images/ppl17.jpg', '113', 'CARIEDO&STUDIO', '1421.56666666664');
INSERT INTO `seller&goods` VALUES ('9', 'Golden1', '114', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙14', '2380', '2025', '9276', '13891', '817', '3423', 'images/ppl8.jpg', 'images/ppl18.jpg', '114', 'EXCELSIOR&Nose&SWAROVSKI&MUJI', '1434.35238095236');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO1', '115', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子15', '2403', '2045', '9364', '14028', '824', '3453', 'images/ppl9.jpg', 'images/ppl20.jpg', '115', 'adidas', '1447.13809523807');
INSERT INTO `seller&goods` VALUES ('6', 'Boba奶绿1', '116', 'WellDerma梦蜗茶露面膜收缩毛孔控油保湿补水茶树抖音同款裙子16', '2426', '2065', '9452', '14165', '831', '3483', 'images/ppl21.jpg', 'images/ppl22.jpg', '116', 'THE GREAT YOGA', '1459.92380952378');
INSERT INTO `seller&goods` VALUES ('7', 'ZARA1', '117', '2019夏季新款韩版小香风黑白撞色娃娃领显瘦修身收腰赫本小黑裙短袖a字连衣裙裙子17', '2449', '2085', '9540', '14302', '838', '3513', 'images/ppl23.jpg', 'images/ppl24.jpg', '117', 'LISA&adidas Originals', '1472.7095238095');
INSERT INTO `seller&goods` VALUES ('8', '小红人1', '118', '新款女装夏季气质名媛仙女修身小清新a字裙子挂脖露肩蕾丝连衣裙18', '2472', '2105', '9628', '14439', '845', '3543', 'images/ppl25.jpg', 'images/ppl26.jpg', '118', 'URBAN REVIVO&NAOAO CLUB', '1485.49523809521');
INSERT INTO `seller&goods` VALUES ('9', 'Golden1', '119', '早春新品四季款高腰牛仔短裙女夏2019新款ins超火裙子a字包臀裙不规则半身裙19', '2495', '2125', '9716', '14576', '852', '3573', 'images/ppl27.jpg', 'images/ppl28.jpg', '119', 'UNIQLO&H&M&CHANEL&CHANEL BEAUTY&Charles&Keith', '1498.28095238093');
INSERT INTO `seller&goods` VALUES ('10', '四幕ISMOO1', '120', '谜秀毛边牛仔短裤夏装新款韩版高腰chic港味破洞热裤女装潮裙子20', '2518', '2145', '9804', '14713', '859', '3603', 'images/ppl29.jpg', 'images/ppl30.jpg', '120', 'littledry&CONVERSE', '1511.06666666664');

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `uid` int(255) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`uid`)
) ENGINE=MyISAM AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', 'yoga', '123456', '13502322971');
INSERT INTO `user` VALUES ('3', 'mingming', '123456', '13502322978');
INSERT INTO `user` VALUES ('16', 'dadad', '13581111111', '123456da');
INSERT INTO `user` VALUES ('15', 'nihao', '123456', '161');
INSERT INTO `user` VALUES ('17', 'adawdwa', '13544444444', '1321654dasda');
INSERT INTO `user` VALUES ('18', 'dasd', '13548787787', '1234654dad');
INSERT INTO `user` VALUES ('20', 'jfiajjd', '123456', '13502322977');

-- ----------------------------
-- Table structure for userhistory
-- ----------------------------
DROP TABLE IF EXISTS `userhistory`;
CREATE TABLE `userhistory` (
  `uid` int(11) NOT NULL,
  `gid` varchar(255) NOT NULL,
  `goodsNum` varchar(255) NOT NULL,
  `goodsSize` varchar(255) NOT NULL,
  `sid` int(11) DEFAULT NULL,
  `gouwuid` int(10) unsigned NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`gouwuid`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of userhistory
-- ----------------------------
INSERT INTO `userhistory` VALUES ('1', '3', '3', 'M', '3', '1');
INSERT INTO `userhistory` VALUES ('1', '6', '4', 'M', '1', '2');
INSERT INTO `userhistory` VALUES ('1', '4', '5', 'M', '4', '3');
INSERT INTO `userhistory` VALUES ('1', '1', '100', 'M', '1', '4');
INSERT INTO `userhistory` VALUES ('1', '7', '1', 'M', '2', '5');
INSERT INTO `userhistory` VALUES ('1', '15', '1', 'S', '5', '10');
INSERT INTO `userhistory` VALUES ('1', '8', '1', 'S', '3', '7');
INSERT INTO `userhistory` VALUES ('1', '13', '1', 'S', '3', '8');
INSERT INTO `userhistory` VALUES ('1', '5', '1', 'S', '5', '11');
INSERT INTO `userhistory` VALUES ('1', '5', '1', 'S', '5', '12');
INSERT INTO `userhistory` VALUES ('1', '45', '1', 'S', '10', '14');
INSERT INTO `userhistory` VALUES ('1', '25', '1', 'S', '5', '15');
SET FOREIGN_KEY_CHECKS=1;
