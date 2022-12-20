-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: teamporject1
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `address`
--

DROP TABLE IF EXISTS `address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `address` (
  `address_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `address_name` varchar(15) DEFAULT NULL,
  `receiver` varchar(15) DEFAULT NULL,
  `phone_number` char(13) DEFAULT NULL COMMENT '01@-@@@@-@@@@',
  `address` varchar(50) DEFAULT NULL,
  `is_default` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`address_id`),
  KEY `FK_user_TO_address_1` (`user_id`),
  CONSTRAINT `FK_user_TO_address_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `address`
--

LOCK TABLES `address` WRITE;
/*!40000 ALTER TABLE `address` DISABLE KEYS */;
/*!40000 ALTER TABLE `address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `inquiry`
--

DROP TABLE IF EXISTS `inquiry`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `inquiry` (
  `inquiry_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `seller_id` int unsigned NOT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `content` text,
  PRIMARY KEY (`inquiry_id`),
  KEY `FK_user_TO_inquiry_1` (`user_id`),
  KEY `FK_product_TO_inquiry_1` (`product_id`),
  KEY `FK_product_TO_inquiry_2` (`seller_id`),
  CONSTRAINT `FK_product_TO_inquiry_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FK_product_TO_inquiry_2` FOREIGN KEY (`seller_id`) REFERENCES `product` (`seller_id`),
  CONSTRAINT `FK_user_TO_inquiry_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `inquiry`
--

LOCK TABLES `inquiry` WRITE;
/*!40000 ALTER TABLE `inquiry` DISABLE KEYS */;
/*!40000 ALTER TABLE `inquiry` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `order`
--

DROP TABLE IF EXISTS `order`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `order` (
  `order_id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `user_id` int unsigned NOT NULL,
  `seller_id` int unsigned NOT NULL,
  `quantity` int DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `memo` varchar(50) DEFAULT NULL,
  `total_price` int DEFAULT NULL,
  PRIMARY KEY (`order_id`),
  KEY `FK_product_TO_order_1` (`product_id`),
  KEY `FK_product_TO_order_2` (`seller_id`),
  KEY `FK_user_TO_order_1` (`user_id`),
  CONSTRAINT `FK_product_TO_order_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FK_product_TO_order_2` FOREIGN KEY (`seller_id`) REFERENCES `product` (`seller_id`),
  CONSTRAINT `FK_user_TO_order_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `order`
--

LOCK TABLES `order` WRITE;
/*!40000 ALTER TABLE `order` DISABLE KEYS */;
/*!40000 ALTER TABLE `order` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product`
--

DROP TABLE IF EXISTS `product`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product` (
  `product_id` int unsigned NOT NULL AUTO_INCREMENT,
  `seller_id` int unsigned NOT NULL,
  `category` varchar(50) NOT NULL,
  `brand` varchar(50) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `product_detail` varchar(300) DEFAULT NULL,
  `image` text,
  `price` int DEFAULT NULL,
  `delivery_fee` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `expire_date` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `funding` int DEFAULT NULL,
  `funding_sum` int DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FK_seller_TO_product_1` (`seller_id`),
  CONSTRAINT `FK_seller_TO_product_1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`seller_id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (2,1,'맥주','정한민양조','곰표맥주','밀가루 공장의 맛 곰표맥주!','../asset/곰표.jpg',3000,NULL,'2022-12-20 15:00:00','2022-12-28 15:00:00',120000,0),(3,1,'맥주','정한민양조','민트맥주','시원하고 상쾌한 민트맥주 한캔하고 가세요!','../asset/mint1.jpg',4000,NULL,'2022-12-20 15:00:00','2022-12-27 15:00:00',60000,0),(4,1,'청주','정한민양조','백송&화백','백제 전통방식으로 만들어낸 한산소곡주 백송&화백','../asset/백송&화백.jpg',50000,NULL,'2022-12-02 15:00:00','2022-12-25 15:00:00',1200000,0),(5,1,'양주','정한민양조','부자진','대한민국 최초의 진 지금 즐겨보세요','../asset/부자진.png',60000,NULL,'2022-12-05 15:00:00','2022-12-26 15:00:00',800000,0),(6,1,'막걸리','정한민양조','붉은 차나락','붉은 차나락을 이용한 고급 탁주','../asset/붉은 차나락.png',5000,NULL,'2022-11-20 15:00:00','2022-12-28 15:00:00',120000,360000),(7,1,'와인','정한민양조','레인보우 와인','7가지 과일을 가지고 만든 샤토미소 와인','../asset/레인보우.png',40000,NULL,'2022-12-21 15:00:00','2022-12-25 15:00:00',600000,0),(8,1,'양주','정한민양조','시즌','남양 예봉산의 꽃향기를 담은 벌꿀주 시즌','../asset/시즌.jpg',80000,NULL,'2022-12-02 15:00:00','2023-01-25 15:00:00',2400000,0),(9,1,'청주','정한민양조','신선담금주','누구보다 빠르고 쉽게 만들수 있는 신선담금주','../asset/신선담금주.jpg',10000,NULL,'2022-12-05 15:00:00','2022-12-26 15:00:00',80000,0),(10,1,'막걸리','정한민양조','술이쁘다','보기 좋은 떡이 맛이 좋다 예쁜 탁주','../asset/술이쁘다.png',4000,NULL,'2022-12-10 15:00:00','2022-12-28 15:00:00',120000,0),(11,1,'청주','정한민양조','신선주','천년의 신비를 간직한 신비의 술 신선주','../asset/신선주.png',40000,NULL,'2022-12-21 15:00:00','2022-12-25 15:00:00',600000,0),(12,1,'와인','정한민양조','영천와인','영천에서 직접 재배한 포도로 숙성시킨 영천와인','../asset/영천와인.png',20000,NULL,'2022-12-08 15:00:00','2022-12-22 15:00:00',240000,0),(13,1,'막걸리','정한민양조','잣막걸리','잣으로 만들어서 고소한 잣막걸리','../asset/잣막걸리.jpg',50000,NULL,'2022-12-10 15:00:00','2022-12-21 15:00:00',2400000,0),(14,1,'청주','정한민양조','천비향','천리를 넘어서도 맡을수 있는 향기 천비향','../asset/천비향.png',30000,NULL,'2022-12-21 15:00:00','2023-01-23 15:00:00',100000,0),(15,1,'청주','정한민양조','하향주','연꽃의 향기를 담은 하향주','../asset/하향주.png',12000,NULL,'2022-12-14 15:00:00','2022-12-20 15:00:00',100000,0),(16,1,'청주','정한민양조','한산소곡주','역사와 전통의 한산소곡주','../asset/한산소곡주.jpg',360000,NULL,'2022-12-02 15:00:00','2022-12-24 15:00:00',24000000,0);
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_option1`
--

DROP TABLE IF EXISTS `product_option1`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_option1` (
  `option_id` int unsigned NOT NULL AUTO_INCREMENT,
  `product_id` int unsigned NOT NULL,
  `content` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`option_id`),
  KEY `FK_product_TO_product_option1_1` (`product_id`),
  CONSTRAINT `FK_product_TO_product_option1_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_option1`
--

LOCK TABLES `product_option1` WRITE;
/*!40000 ALTER TABLE `product_option1` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_option1` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_option2`
--

DROP TABLE IF EXISTS `product_option2`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_option2` (
  `option_contend_id` int unsigned NOT NULL AUTO_INCREMENT,
  `option_id` int unsigned NOT NULL,
  `content` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`option_contend_id`),
  KEY `FK_product_option1_TO_product_option2_1` (`option_id`),
  CONSTRAINT `FK_product_option1_TO_product_option2_1` FOREIGN KEY (`option_id`) REFERENCES `product_option1` (`option_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_option2`
--

LOCK TABLES `product_option2` WRITE;
/*!40000 ALTER TABLE `product_option2` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_option2` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `product_option3`
--

DROP TABLE IF EXISTS `product_option3`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `product_option3` (
  `option_contend_id2` int unsigned NOT NULL AUTO_INCREMENT,
  `option_contend_id` int unsigned NOT NULL,
  `content` varchar(50) DEFAULT NULL,
  `price` int DEFAULT NULL,
  PRIMARY KEY (`option_contend_id2`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product_option3`
--

LOCK TABLES `product_option3` WRITE;
/*!40000 ALTER TABLE `product_option3` DISABLE KEYS */;
/*!40000 ALTER TABLE `product_option3` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `scrapbook`
--

DROP TABLE IF EXISTS `scrapbook`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `scrapbook` (
  `scrapbook_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  PRIMARY KEY (`scrapbook_id`),
  KEY `FK_user_TO_scrapbook_1` (`user_id`),
  KEY `FK_product_TO_scrapbook_1` (`product_id`),
  CONSTRAINT `FK_product_TO_scrapbook_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FK_user_TO_scrapbook_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `scrapbook`
--

LOCK TABLES `scrapbook` WRITE;
/*!40000 ALTER TABLE `scrapbook` DISABLE KEYS */;
/*!40000 ALTER TABLE `scrapbook` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `seller`
--

DROP TABLE IF EXISTS `seller`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `seller` (
  `seller_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `company_name` varchar(30) DEFAULT NULL,
  `representative` varchar(10) DEFAULT NULL,
  `address` varchar(200) DEFAULT NULL,
  `customer_center` varchar(15) DEFAULT NULL,
  `email` varchar(50) DEFAULT NULL,
  `registration_num` int DEFAULT NULL,
  PRIMARY KEY (`seller_id`),
  KEY `FK_user_TO_seller_1` (`user_id`),
  CONSTRAINT `FK_user_TO_seller_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (1,1,'정한민 양조장','정한민','경기도 하남시','010-000-0000','wjdgksals56@gmail.com',1234);
/*!40000 ALTER TABLE `seller` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `user_id` int unsigned NOT NULL AUTO_INCREMENT,
  `birth` date DEFAULT NULL,
  `nickname` varchar(15) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `provider` varchar(8) DEFAULT NULL,
  `provider_id` text,
  `email` varchar(30) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'1994-01-24','핫산',NULL,'2022-12-20 16:43:19','2022-12-20 16:43:19',NULL,'1QKay1J8aiCuysoX41JEqcQIdN_fXnngD1-hlmugErE','wjdgksals56@gmail.com');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-21  6:17:45
