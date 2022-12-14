-- MySQL dump 10.13  Distrib 8.0.25, for Win64 (x86_64)
--
-- Host: localhost    Database: teamproject
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
-- Table structure for table `cart`
--

DROP TABLE IF EXISTS `cart`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `cart` (
  `cart_id` int unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int unsigned NOT NULL,
  `product_id` int unsigned NOT NULL,
  `number` int DEFAULT NULL,
  PRIMARY KEY (`cart_id`),
  KEY `FK_user_TO_scrapbook_1` (`user_id`),
  KEY `FK_product_TO_scrapbook_1` (`product_id`),
  CONSTRAINT `FK_product_TO_scrapbook_1` FOREIGN KEY (`product_id`) REFERENCES `product` (`product_id`),
  CONSTRAINT `FK_user_TO_scrapbook_1` FOREIGN KEY (`user_id`) REFERENCES `user` (`user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `cart`
--

LOCK TABLES `cart` WRITE;
/*!40000 ALTER TABLE `cart` DISABLE KEYS */;
/*!40000 ALTER TABLE `cart` ENABLE KEYS */;
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
  `create_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `total_price` int DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `adress` text,
  `name` text,
  `p_number` varchar(15) DEFAULT NULL,
  `memo` varchar(50) DEFAULT NULL,
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
  `brand` varchar(50) DEFAULT NULL,
  `title` varchar(100) DEFAULT NULL,
  `product_detail` varchar(300) DEFAULT NULL,
  `image` text,
  `price` int DEFAULT NULL,
  `delivery_fee` int DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `funding` int DEFAULT NULL,
  `funding_sum` int DEFAULT NULL,
  `category` varchar(15) DEFAULT NULL,
  `expire_date` date DEFAULT NULL,
  PRIMARY KEY (`product_id`),
  KEY `FK_seller_TO_product_1` (`seller_id`),
  CONSTRAINT `FK_seller_TO_product_1` FOREIGN KEY (`seller_id`) REFERENCES `seller` (`seller_id`)
) ENGINE=InnoDB AUTO_INCREMENT=18 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `product`
--

LOCK TABLES `product` WRITE;
/*!40000 ALTER TABLE `product` DISABLE KEYS */;
INSERT INTO `product` VALUES (1,2,'???????????????','?????????','????????? ????????? ????????? ????????? ??? ?????????','../images/?????????.png',40000,0,'2022-12-21 15:00:00','2022-12-21 15:00:00',600000,0,'??????','2022-12-26'),(2,2,'???????????????','????????????','????????? ????????? ??? ????????????!','../images/??????.jpg',3000,NULL,'2022-12-20 15:00:00','2022-12-25 19:24:50',120000,0,'??????','2022-12-29'),(3,2,'???????????????','????????????','???????????? ????????? ???????????? ???????????? ?????????!','../images/mint1.jpg',4000,NULL,'2022-12-20 15:00:00','2022-12-25 19:24:50',60000,0,'??????','2022-12-28'),(4,2,'???????????????','??????&??????','?????? ?????????????????? ???????????? ??????????????? ??????&??????','../images/??????&??????.jpg',50000,NULL,'2022-12-02 15:00:00','2022-12-25 19:27:05',1200000,0,'??????','2022-12-26'),(5,2,'???????????????','?????????','???????????? ????????? ??? ?????? ???????????????','../images/?????????.png',60000,NULL,'2022-12-05 15:00:00','2022-12-25 19:27:06',800000,0,'??????','2022-12-27'),(6,2,'???????????????','?????? ?????????','?????? ???????????? ????????? ?????? ??????','../images/?????? ?????????.png',5000,NULL,'2022-11-20 15:00:00','2022-12-25 19:27:06',120000,360000,'?????????','2022-12-29'),(7,2,'???????????????','???????????? ??????','7?????? ????????? ????????? ?????? ???????????? ??????','../images/????????????.png',40000,NULL,'2022-12-21 15:00:00','2022-12-25 19:27:06',600000,0,'??????','2022-12-26'),(8,2,'???????????????','??????','?????? ???????????? ???????????? ?????? ????????? ??????','../images/??????.jpg',80000,NULL,'2022-12-02 15:00:00','2022-12-25 19:27:06',2400000,0,'??????','2023-01-26'),(9,2,'???????????????','???????????????','???????????? ????????? ?????? ????????? ?????? ???????????????','../images/???????????????.jpg',10000,NULL,'2022-12-05 15:00:00','2022-12-25 19:27:06',80000,0,'??????','2022-12-27'),(10,2,'???????????????','????????????','?????? ?????? ?????? ?????? ?????? ?????? ??????','../images/????????????.png',4000,NULL,'2022-12-10 15:00:00','2022-12-25 19:27:06',120000,0,'?????????','2022-12-29'),(13,2,'???????????????','????????????','???????????? ?????? ????????? ????????? ???????????? ????????????','../images/????????????.png',20000,NULL,'2022-12-08 15:00:00','2022-12-25 19:27:31',240000,0,'??????','2022-12-23'),(14,2,'???????????????','????????????','????????? ???????????? ????????? ????????????','../images/????????????.jpg',50000,NULL,'2022-12-10 15:00:00','2022-12-25 19:27:31',2400000,0,'?????????','2022-12-22'),(15,2,'???????????????','?????????','????????? ???????????? ????????? ?????? ?????? ?????????','../images/?????????.png',30000,NULL,'2022-12-21 15:00:00','2022-12-25 19:27:31',100000,0,'??????','2023-01-24'),(16,2,'???????????????','?????????','????????? ????????? ?????? ?????????','../images/?????????.png',12000,NULL,'2022-12-14 15:00:00','2022-12-25 19:27:31',100000,0,'??????','2022-12-21'),(17,2,'???????????????','???????????????','????????? ????????? ???????????????','../images/???????????????.jpg',360000,NULL,'2022-12-02 15:00:00','2022-12-25 19:27:31',24000000,0,'??????','2022-12-25');
/*!40000 ALTER TABLE `product` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `seller`
--

LOCK TABLES `seller` WRITE;
/*!40000 ALTER TABLE `seller` DISABLE KEYS */;
INSERT INTO `seller` VALUES (2,1,'????????? ?????????','?????????','????????? ?????????','010-000-0000','wjdgksals56@gmail.com',1234);
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
  `nickname` varchar(15) DEFAULT NULL,
  `adress` text,
  `P_number` varchar(15) DEFAULT NULL,
  `status` varchar(10) DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `provider_id` text,
  `email` text,
  `birth` date DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'??????','????????? ????????? ????????? 205?????? ','010-6628-7683',NULL,'2022-12-25 19:15:13','????????????','wjdgksals56@naver.com','1990-01-24'),(8,'??????','????????? ??????','00000',NULL,'2022-12-25 21:11:21','1QKay1J8aiCuysoX41JEqcQIdN_fXnngD1-hlmugErE','wjdgksals56@gmail.com',NULL);
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

-- Dump completed on 2022-12-26  6:12:57
