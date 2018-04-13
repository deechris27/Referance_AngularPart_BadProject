-- phpMyAdmin SQL Dump
-- version 4.0.10.18
-- https://www.phpmyadmin.net
--
-- Host: localhost:3306
-- Generation Time: Jan 04, 2018 at 12:16 AM
-- Server version: 5.6.36-cll-lve
-- PHP Version: 5.6.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `flarow_securedb`
--

-- --------------------------------------------------------

--
-- Table structure for table `amenities`
--

CREATE TABLE IF NOT EXISTS `amenities` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) DEFAULT '0',
  `property_id` bigint(20) DEFAULT '0',
  `wifi` tinyint(4) DEFAULT NULL,
  `furnished` tinyint(4) DEFAULT NULL,
  `ac` tinyint(4) DEFAULT NULL,
  `tv` tinyint(4) DEFAULT NULL,
  `heater` tinyint(4) DEFAULT NULL,
  `security` tinyint(4) DEFAULT NULL,
  `rainwater_harvesting` tinyint(4) DEFAULT NULL,
  `metro_water` tinyint(4) DEFAULT NULL,
  `cable_connection` tinyint(4) DEFAULT NULL,
  `three_phase` tinyint(4) DEFAULT NULL,
  `inverter` tinyint(4) DEFAULT NULL,
  `parking_lot` tinyint(4) DEFAULT NULL,
  `elevator` tinyint(4) DEFAULT NULL,
  `gym` tinyint(4) DEFAULT NULL,
  `shared_parking` tinyint(4) DEFAULT NULL,
  `shared_elevator` tinyint(4) DEFAULT NULL,
  `shared_backyard` tinyint(4) DEFAULT NULL,
  `shared_balcony` tinyint(4) DEFAULT NULL,
  `shared_terrace` tinyint(4) DEFAULT NULL,
  `shared_gym` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint(2) NOT NULL DEFAULT '0' COMMENT '''0''=''Not deleted'',1=''deleted by tenant'',2=''by owner'',3=''by admin''',
  `deleted_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  KEY `property_id` (`property_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `amenities`
--

INSERT INTO `amenities` (`id`, `owner_id`, `property_id`, `wifi`, `furnished`, `ac`, `tv`, `heater`, `security`, `rainwater_harvesting`, `metro_water`, `cable_connection`, `three_phase`, `inverter`, `parking_lot`, `elevator`, `gym`, `shared_parking`, `shared_elevator`, `shared_backyard`, `shared_balcony`, `shared_terrace`, `shared_gym`, `created_at`, `updated_at`, `deleted`, `deleted_at`) VALUES
(1, 1, 42, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2017-10-14 02:26:30', '2017-10-14 02:26:30', 0, NULL),
(2, 1, 43, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 1, 0, 0, 1, 0, 1, 0, 0, '2017-10-14 11:49:28', '2017-10-14 11:49:28', 0, NULL),
(3, 1, 44, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, '2017-10-14 12:03:04', '2017-10-14 12:03:04', 0, NULL),
(4, 16, 45, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, '2017-10-31 11:00:32', '2017-10-31 11:00:32', 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `migrations`
--

CREATE TABLE IF NOT EXISTS `migrations` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `migration` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `batch` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=5 ;

--
-- Dumping data for table `migrations`
--

INSERT INTO `migrations` (`id`, `migration`, `batch`) VALUES
(1, '2014_10_12_000000_create_users_table', 1),
(2, '2014_10_12_100000_create_password_resets_table', 1),
(3, '2017_06_17_225459_create_admin_table', 1),
(4, '2017_06_17_234959_add_status_super_admin', 2);

-- --------------------------------------------------------

--
-- Table structure for table `otp`
--

CREATE TABLE IF NOT EXISTS `otp` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `otp` int(11) DEFAULT NULL,
  `mobile` bigint(11) DEFAULT NULL,
  `expired` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=89 ;

--
-- Dumping data for table `otp`
--

INSERT INTO `otp` (`id`, `otp`, `mobile`, `expired`, `created_at`) VALUES
(1, 13538, NULL, 0, '2017-09-16 23:29:47'),
(2, 13117, NULL, 0, '2017-09-16 23:30:50'),
(3, 32199, NULL, 0, '2017-09-16 23:32:12'),
(4, 68182, NULL, 0, '2017-09-16 23:56:14'),
(5, 21325, NULL, 0, '2017-09-16 23:59:07'),
(10, 76468, 9791225533, 0, '2017-09-17 05:00:16'),
(11, 92617, 9791225533, 0, '2017-09-17 05:13:18'),
(12, 97912, 9791225533, 0, '2017-09-17 05:29:29'),
(13, 21381, 9791225533, 0, '2017-09-17 05:35:30'),
(14, 50776, 9791225533, 0, '2017-09-17 05:37:38'),
(15, 41198, 9791225533, 0, '2017-09-18 20:50:36'),
(16, 98799, 9791225533, 0, '2017-09-20 20:13:43'),
(17, 51188, 9791225533, 0, '2017-09-28 02:47:34'),
(18, 55808, 8667620017, 0, '2017-09-30 19:25:47'),
(19, 49882, 8667688027, 0, '2017-09-30 19:28:47'),
(20, 30923, 8939885859, 0, '2017-10-03 15:43:04'),
(21, 72105, 8755018860, 0, '2017-10-03 19:57:13'),
(22, 38030, 8755018860, 0, '2017-10-03 19:59:22'),
(23, 57869, 7017919241, 0, '2017-10-03 20:40:41'),
(24, 65485, 9962299160, 0, '2017-10-04 15:53:41'),
(25, 64451, 9791225533, 0, '2017-10-05 18:52:29'),
(26, 16817, 8098488698, 0, '2017-10-31 17:46:49'),
(27, 71574, 8098488698, 0, '2017-10-31 17:48:15'),
(28, 42694, 8098488698, 0, '2017-10-31 17:51:19'),
(29, 14108, 8939885859, 0, '2017-10-31 17:51:22'),
(30, 71942, 8098488698, 0, '2017-10-31 17:59:34'),
(31, 91235, 9042658569, 0, '2017-10-31 18:02:49'),
(32, 92898, 9042658569, 0, '2017-10-31 18:04:32'),
(33, 26371, 9042658569, 0, '2017-10-31 18:04:37'),
(34, 12832, 8939885859, 0, '2017-10-31 18:22:56'),
(35, 38288, 9962299160, 0, '2017-11-01 09:30:17'),
(36, 89448, 7904695386, 0, '2017-11-01 11:28:23'),
(37, 57536, 7904695386, 0, '2017-11-01 11:30:34'),
(38, 35921, 7904695386, 0, '2017-11-01 11:30:49'),
(39, 95572, 7904695386, 0, '2017-11-01 11:31:40'),
(40, 41110, 9962299160, 0, '2017-11-06 04:02:10'),
(41, 50901, 1234567890, 0, '2017-11-09 13:16:01'),
(42, 89938, 1234567890, 0, '2017-11-09 13:16:23'),
(43, 21671, 9789932080, 0, '2017-11-09 13:19:50'),
(44, 12993, 9790794601, 0, '2017-11-09 16:18:48'),
(45, 20445, 9790794601, 0, '2017-11-09 16:22:08'),
(46, 94107, 9790794601, 0, '2017-11-09 16:24:41'),
(47, 85778, 9840946893, 0, '2017-11-09 16:25:35'),
(48, 86575, 9791225533, 0, '2017-11-09 16:55:13'),
(49, 79427, 9791225533, 0, '2017-11-09 16:58:54'),
(50, 94568, 9430374362, 0, '2017-11-10 02:50:54'),
(51, 26030, 9962237677, 0, '2017-11-10 05:56:15'),
(52, 30738, 9791225533, 0, '2017-11-10 09:18:20'),
(53, 62698, 9791225533, 0, '2017-11-10 09:22:00'),
(54, 93433, 8870995558, 0, '2017-11-10 10:02:29'),
(55, 31604, 9790942976, 0, '2017-11-10 11:02:36'),
(56, 60214, 8870995558, 0, '2017-11-10 11:54:00'),
(57, 38890, 8667620017, 0, '2017-11-10 12:21:42'),
(58, 19710, 9962299160, 0, '2017-11-10 13:06:04'),
(59, 80640, 8870995558, 0, '2017-11-10 13:09:13'),
(60, 31209, 9791225533, 0, '2017-11-10 17:31:52'),
(61, 65893, 9430374362, 0, '2017-11-11 03:53:09'),
(62, 26376, 8098488698, 0, '2017-11-11 05:13:42'),
(63, 14838, 7358555991, 0, '2017-11-11 11:47:26'),
(64, 23296, 7667668233, 0, '2017-11-11 11:52:31'),
(65, 93838, 9791225533, 0, '2017-11-12 04:49:20'),
(66, 43759, 9791225533, 0, '2017-11-12 05:10:36'),
(67, 66365, 9020133025, 0, '2017-11-12 05:36:31'),
(68, 19360, 9962237677, 0, '2017-11-15 08:05:09'),
(69, 34381, 9962237677, 0, '2017-11-15 08:06:52'),
(70, 30178, 9445242339, 0, '2017-11-16 06:45:39'),
(71, 58174, 9985958313, 0, '2017-11-21 17:45:01'),
(72, 40532, 9791225533, 0, '2017-11-21 18:42:30'),
(73, 71082, 9791225533, 0, '2017-11-21 18:45:07'),
(74, 66122, 9884349350, 0, '2017-11-21 18:57:09'),
(75, 76286, 9791225533, 0, '2017-11-21 19:05:50'),
(76, 73478, 8939885859, 0, '2017-11-23 17:48:14'),
(77, 10776, 8939885859, 0, '2017-11-29 15:07:30'),
(78, 57124, 8828107482, 0, '2017-12-22 11:58:30'),
(79, 49536, 8755018860, 0, '2017-12-28 11:59:59'),
(80, 36456, 8755018860, 0, '2017-12-28 12:00:47'),
(81, 94428, 8755018860, 0, '2017-12-28 12:01:58'),
(82, 59130, 8755018860, 0, '2017-12-28 12:31:24'),
(83, 26034, 8755018860, 0, '2017-12-28 12:33:01'),
(84, 18493, 8755018860, 0, '2017-12-28 12:33:23'),
(85, 63714, 7894561236, 0, '2017-12-29 10:45:27'),
(86, 97229, 9962237677, 0, '2017-12-29 15:30:42'),
(87, 81850, 8828107482, 0, '2017-12-31 15:10:39'),
(88, 17293, 9962237677, 0, '2018-01-03 13:49:06');

-- --------------------------------------------------------

--
-- Table structure for table `password_resets`
--

CREATE TABLE IF NOT EXISTS `password_resets` (
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `token` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  KEY `password_resets_email_index` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

-- --------------------------------------------------------

--
-- Table structure for table `sms__histories`
--

CREATE TABLE IF NOT EXISTS `sms__histories` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `to` varchar(150) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `message` varchar(255) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `created_by` int(10) unsigned DEFAULT NULL,
  `updated_by` int(10) unsigned DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=64 ;

--
-- Dumping data for table `sms__histories`
--

INSERT INTO `sms__histories` (`id`, `to`, `message`, `created_by`, `updated_by`, `created_at`, `updated_at`) VALUES
(50, '8939885859', 'Hello ANAMIK ADHIKARY your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-10-31 09:04:14', '2017-10-31 09:04:14'),
(51, '8939885859', 'Hello ANAMIK ADHIKARY your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-10-31 14:50:34', '2017-10-31 14:50:34'),
(52, '9791225533', 'Hello Uma your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-10-31 17:55:23', '2017-10-31 17:55:23'),
(53, '7904695386', 'Hello Veni  your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-01 16:34:44', '2017-11-01 16:34:44'),
(54, '9789932080', 'Hello Janani your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-10 20:18:56', '2017-11-10 20:18:56'),
(55, '9962299160', 'Hello Pughalveni.r@gmail.com your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-11 18:50:34', '2017-11-11 18:50:34'),
(56, '9791225533', 'Hello Umamaheswaran TG your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-12 11:24:06', '2017-11-12 11:24:06'),
(57, '9791225533', 'Hello Umamaheswaran TG your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-12 11:24:20', '2017-11-12 11:24:20'),
(58, '9791225533', 'Hello Umamaheswaran TG your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-12 11:27:46', '2017-11-12 11:27:46'),
(59, '9791225533', 'Hello Umamaheswaran TG your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-12 11:46:01', '2017-11-12 11:46:01'),
(60, '9430374362', 'Hello Anamik Asdhfhfh your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-11-16 00:33:14', '2017-11-16 00:33:14'),
(61, '9962237677', 'Hello Sivaramasethu K your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-12-29 22:46:10', '2017-12-29 22:46:10'),
(62, '9962237677', 'Hello Sivaramasethu K your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-12-29 22:46:17', '2017-12-29 22:46:17'),
(63, '9962237677', 'Hello Sivaramasethu K your friend/tenant invited you to join Flarow, Please register here http://flarow.com/#/register', NULL, NULL, '2017-12-29 22:46:39', '2017-12-29 22:46:39');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_booking`
--

CREATE TABLE IF NOT EXISTS `tbl_booking` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) DEFAULT '0',
  `tenant_id` bigint(20) DEFAULT '0',
  `property_id` bigint(20) DEFAULT '0',
  `tenant_name` varchar(255) DEFAULT NULL,
  `tenant_mobile` bigint(10) DEFAULT NULL,
  `tenant_email` varchar(255) DEFAULT NULL,
  `startDate` timestamp NULL DEFAULT NULL,
  `endDate` timestamp NULL DEFAULT NULL,
  `status` tinyint(2) DEFAULT '1' COMMENT '2="booking pending",1="Booked"',
  `request_status` tinyint(2) DEFAULT '1' COMMENT '2="Tagged",1="Untagged"',
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted` tinyint(2) NOT NULL DEFAULT '0' COMMENT '''0''=''Not deleted'',1=''deleted by tenant'',2=''by owner'',3=''by admin''',
  `deleted_at` timestamp NULL DEFAULT NULL,
  `created_by` int(2) DEFAULT NULL,
  `updated_by` int(2) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`),
  KEY `tenant_id` (`tenant_id`),
  KEY `property_id` (`property_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=35 ;

--
-- Dumping data for table `tbl_booking`
--

INSERT INTO `tbl_booking` (`id`, `owner_id`, `tenant_id`, `property_id`, `tenant_name`, `tenant_mobile`, `tenant_email`, `startDate`, `endDate`, `status`, `request_status`, `created_at`, `updated_at`, `deleted`, `deleted_at`, `created_by`, `updated_by`) VALUES
(33, 1, 0, 2, 'test', 7868071158, 'test@gmail.com', NULL, NULL, 1, 1, '2017-12-27 18:23:46', '2017-12-27 18:23:46', 0, NULL, 1, NULL),
(34, 1, 0, NULL, 'nm bmb', 5667777666, 'dsc@gmail.com', NULL, NULL, 1, 1, '2017-12-28 12:24:49', '2017-12-28 12:24:49', 0, NULL, 1, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_comments`
--

CREATE TABLE IF NOT EXISTS `tbl_comments` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `prop_id` bigint(20) NOT NULL,
  `name` varchar(121) NOT NULL,
  `email` varchar(191) NOT NULL,
  `messages` text NOT NULL,
  `rating` float(11,2) NOT NULL DEFAULT '0.00',
  `status` tinyint(2) NOT NULL DEFAULT '0',
  `tenant_id` bigint(20) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_kyc`
--

CREATE TABLE IF NOT EXISTS `tbl_kyc` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tenant_id` varchar(191) NOT NULL,
  `voterid` varchar(191) DEFAULT NULL,
  `aadhar` varchar(191) DEFAULT NULL,
  `passport` varchar(191) DEFAULT NULL,
  `a_stat` tinyint(2) NOT NULL DEFAULT '0' COMMENT '''0''=not uploaded, ''1''=sent for verification, ''2''= Approved, ''3''=''invalid doc''',
  `v_stat` tinyint(2) NOT NULL DEFAULT '0' COMMENT '''0''=not uploaded, ''1''=sent for verification, ''2''= Approved, ''3''=''invalid doc''',
  `pass_stat` tinyint(2) NOT NULL DEFAULT '0' COMMENT '''0''=not uploaded, ''1''=sent for verification, ''2''= Approved, ''3''=''invalid doc''',
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=''Not sent'', 1=''Sent for approval'',2=''Verified''',
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `share` tinyint(2) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tenant_id` (`tenant_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `tbl_kyc`
--

INSERT INTO `tbl_kyc` (`id`, `tenant_id`, `voterid`, `aadhar`, `passport`, `a_stat`, `v_stat`, `pass_stat`, `status`, `updated_at`, `created_at`, `share`) VALUES
(1, '3', 'dd0a7b0955fbd7a34a91e1c7d5eaaec4.png', 'ebcd0fb1c44b0ed07842254daec4c3cc.png', NULL, 2, 1, 0, 2, '2017-07-22 10:02:15', '2017-07-03 04:43:47', 0),
(2, '2', 'ab6ef6ab685753ab07ec5d5c126f9218.jpg', '50b302ba631ec0a326431ea788874774.jpg', NULL, 1, 1, 0, 0, '2017-11-22 04:36:20', '2017-07-05 09:12:51', 1),
(3, '4', NULL, '24322cab50d699df38e74ee891f86f77.png', NULL, 2, 2, 2, 2, '2017-07-22 04:58:33', '2017-07-16 04:28:26', 0),
(4, '5', NULL, '68209dc20595f15c48ddcfbe866ef7b1.jpg', NULL, 1, 0, 0, 0, NULL, '2017-07-16 19:08:37', 0),
(6, '8', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-16 23:38:05', 0),
(7, '9', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-27 06:25:59', 0),
(8, '10', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-27 14:29:57', 0),
(9, '11', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-29 13:39:48', 0),
(10, '12', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-29 13:43:01', 0),
(11, '13', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-29 13:46:14', 0),
(12, '14', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-30 02:56:28', 0),
(13, '15', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-07-30 19:23:15', 0),
(14, '16', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-08-03 06:44:44', 0),
(15, '17', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-08-03 06:57:29', 0),
(16, '18', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-08-04 19:15:58', 0),
(17, '19', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-08-04 19:16:58', 0),
(18, '20', NULL, NULL, NULL, 0, 0, 0, 0, NULL, '2017-08-04 19:18:41', 0),
(19, '110', NULL, NULL, NULL, 1, 1, 0, 0, '2017-11-10 13:22:09', '2017-11-10 13:21:30', 0);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_notification`
--

CREATE TABLE IF NOT EXISTS `tbl_notification` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `content` text NOT NULL,
  `admin_id` bigint(20) NOT NULL,
  `owners_id` bigint(20) NOT NULL,
  `tenant_id` bigint(20) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_owners`
--

CREATE TABLE IF NOT EXISTS `tbl_owners` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `name` varchar(191) DEFAULT NULL,
  `email` varchar(191) DEFAULT NULL,
  `password` varchar(191) DEFAULT NULL,
  `phone` varchar(15) DEFAULT NULL,
  `image` varchar(191) DEFAULT NULL,
  `address` varchar(255) DEFAULT NULL,
  `about` longtext,
  `verfy_code` varchar(191) DEFAULT NULL,
  `deleted` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=''Not Deleted'',1=''Deleted''',
  `deleted_at` date DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '0',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `last_login` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email` (`email`),
  KEY `password` (`password`),
  KEY `password_2` (`password`),
  KEY `password_3` (`password`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=17 ;

--
-- Dumping data for table `tbl_owners`
--

INSERT INTO `tbl_owners` (`id`, `name`, `email`, `password`, `phone`, `image`, `address`, `about`, `verfy_code`, `deleted`, `deleted_at`, `status`, `created_at`, `last_login`) VALUES
(1, 'sandeep kumar dan', 'sandeepkumardan@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '123343432423', 'dd904249fe6f48a363117b3c6a2d9786.jpg', NULL, 'Test Data', '7fb8b53b62095874008d064422af1f76', 0, '0000-00-00', 1, '2017-06-21 15:24:42', '2017-06-21 15:24:42'),
(9, 'Rameshwarm', 'rama@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '986555456', '28154.png', NULL, 'testing', '14f56dd97ec0a32386e6831d6c58eb8f', 0, '0000-00-00', 0, '2017-06-21 15:55:26', '2017-06-21 15:55:26'),
(11, 'sandeep', 'sandeepkd3334@gmail.com', 'e10adc3949ba59abbe56e057f20f883e', '12314324234', '44094.png', NULL, 'testing', '74ec22c24b4b1448fbce431357e111d1', 1, '2017-07-21', 1, '2017-06-21 16:02:11', '2017-06-21 16:02:11'),
(13, 'saket', NULL, 'd41d8cd98f00b204e9800998ecf8427e', NULL, NULL, NULL, NULL, 'b7aaf3032f0274d0643815cdcc63baaf', 1, '2017-07-21', 0, '2017-07-15 23:46:51', '2017-07-15 23:46:51'),
(14, 'saket', 'mayanksaket3901@gmail.com', 'bd82e687cf22309261fffa9e316f6d3b', '8755018860', NULL, NULL, NULL, '62806bf84bb76be1c43c9ae9711b45fa', 0, '0000-00-00', 1, '2017-07-15 23:47:33', '2017-07-15 23:47:33'),
(15, 'saketmayank', 'mayanksaket80@gmail.com', '367579291fef6b26874882dfa91a5ca3', NULL, NULL, NULL, NULL, '23bcb961408abde51ba5f777bbbecce0', 1, '2017-07-21', 0, '2017-07-15 23:48:46', '2017-07-15 23:48:46'),
(16, 'pughalveni.r', 'pughalveni.r@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', NULL, NULL, NULL, NULL, 'ea55a16a13632db8d2a7af9027e66ce0', 0, NULL, 0, '2017-08-02 03:12:35', '2017-08-02 03:12:35');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_payment_history`
--

CREATE TABLE IF NOT EXISTS `tbl_payment_history` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `tenant_id` bigint(20) NOT NULL,
  `amount` float(11,2) NOT NULL,
  `create_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `status` tinyint(2) NOT NULL,
  `payment_id` varchar(50) NOT NULL,
  `deleted` tinyint(2) NOT NULL DEFAULT '0',
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `description` varchar(250) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=7 ;

--
-- Dumping data for table `tbl_payment_history`
--

INSERT INTO `tbl_payment_history` (`id`, `tenant_id`, `amount`, `create_date`, `status`, `payment_id`, `deleted`, `updated_at`, `deleted_at`, `description`) VALUES
(1, 2, 4500.00, '2017-10-19 07:58:11', 0, '143a381cb303cb3c6c9c', 0, '2017-10-19 02:28:12', '2017-10-19 02:28:12', 'Cancelled by user'),
(2, 2, 4500.00, '2017-10-19 08:46:45', 0, '3af6dc7aa31d1441382a', 0, '2017-10-19 03:16:46', '2017-10-19 03:16:46', 'Cancelled by user'),
(3, 2, 4500.00, '2017-10-19 08:51:17', 0, '0ab925add22b539a7860', 0, '2017-10-19 03:21:17', '2017-10-19 03:21:17', 'Cancelled by user'),
(4, 2, 4500.00, '2017-10-21 16:55:53', 0, '2da2e03ae9a44704268c', 0, '2017-10-21 11:25:55', '2017-10-21 11:25:55', 'Cancelled by user'),
(5, 2, 4500.00, '2017-10-21 17:31:45', 0, '7c3895fec13f40c58290', 0, '2017-10-21 12:01:46', '2017-10-21 12:01:46', 'Cancelled by user'),
(6, 2, 4500.00, '2017-10-28 17:22:43', 0, '2c1a9bb8e37971aab107', 0, '2017-10-28 11:52:45', '2017-10-28 11:52:45', 'Cancelled by user');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_properties`
--

CREATE TABLE IF NOT EXISTS `tbl_properties` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT NULL,
  `owner_id` bigint(20) DEFAULT '0',
  `rent` bigint(20) DEFAULT NULL,
  `address` text,
  `city` varchar(55) DEFAULT NULL,
  `state` varchar(55) DEFAULT NULL,
  `country` varchar(40) DEFAULT NULL,
  `zipcode` varchar(11) DEFAULT NULL,
  `latitude` varchar(55) DEFAULT NULL,
  `longitude` varchar(55) DEFAULT NULL,
  `details` text,
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=''Inactive'',1=''Active'',2=''Booked''',
  `type` tinyint(2) DEFAULT NULL COMMENT '0=independent, 1=apartment',
  `rooms` tinyint(2) DEFAULT NULL,
  `area` int(11) DEFAULT NULL,
  `garden_area` int(11) DEFAULT NULL,
  `landmark` varchar(250) DEFAULT NULL,
  `nearby_school` varchar(250) DEFAULT NULL,
  `nearby_busstop` varchar(250) DEFAULT NULL,
  `nearby_railway` varchar(250) DEFAULT NULL,
  `kyc_check` tinyint(4) DEFAULT NULL,
  `profile_picture_needed` tinyint(4) DEFAULT NULL,
  `bank_details_needed` tinyint(4) DEFAULT NULL,
  `smoking` tinyint(4) DEFAULT NULL,
  `allow_pets` tinyint(4) DEFAULT NULL,
  `allow_parties` tinyint(4) DEFAULT NULL,
  `additional_rules` varchar(250) DEFAULT NULL,
  `move_in` date DEFAULT NULL,
  `deposit` int(11) DEFAULT NULL,
  `visit_days` int(11) DEFAULT NULL,
  `visit_timings` int(11) DEFAULT NULL,
  `notice_period` int(11) DEFAULT NULL,
  `active` tinyint(4) DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_by` tinyint(2) NOT NULL DEFAULT '0' COMMENT '''0''=''Not deleted'',1=''deleted by tenant'',2=''by owner'',3=''by admin''',
  `deleted` tinyint(2) NOT NULL DEFAULT '0',
  `deleted_at` date DEFAULT NULL,
  `slug` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `status` (`status`),
  KEY `updated_at` (`updated_at`),
  KEY `deleted_by` (`deleted_by`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=46 ;

--
-- Dumping data for table `tbl_properties`
--

INSERT INTO `tbl_properties` (`id`, `title`, `owner_id`, `rent`, `address`, `city`, `state`, `country`, `zipcode`, `latitude`, `longitude`, `details`, `status`, `type`, `rooms`, `area`, `garden_area`, `landmark`, `nearby_school`, `nearby_busstop`, `nearby_railway`, `kyc_check`, `profile_picture_needed`, `bank_details_needed`, `smoking`, `allow_pets`, `allow_parties`, `additional_rules`, `move_in`, `deposit`, `visit_days`, `visit_timings`, `notice_period`, `active`, `created_at`, `updated_at`, `deleted_by`, `deleted`, `deleted_at`, `slug`) VALUES
(2, '1BHK', 1, NULL, 'B104 Greenwoods, Morais City', 'Trichy', 'Tamil Nadu', 'India', '620007', '', '', 'Nice 1BHK apartment at Morais city, near Airport. Ideal for newly married couples or for small family.', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-09-09 04:35:30', '2017-09-09 04:35:30', 0, 0, NULL, NULL),
(9, 'Paying Guest For Male in 4000 /- INR', 1, NULL, '32,College Road, Subba Road Avenue, Nungambakkam,', 'Chennai', 'Tamil Nadu', 'India', '600034', '80.2401823', '13.0632675', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r\n\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-06-23 11:42:51', '2017-07-20 08:15:40', 0, 1, NULL, NULL),
(10, 'Single 1 BHK Room beside IIT', 1, NULL, 'IIT, Madras', 'Chennai', 'Tamil Nadu', 'India', '600034', '79.928808', '13.0474098', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r\n\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-06-23 11:45:40', '2017-07-20 08:15:40', 0, 0, NULL, NULL),
(11, 'Girl''s Paying Guest 3500 /- INR per month', 1, 4500, 'Kasturba Nagar', 'Chennai', 'Tamil Nadu', 'India', '600020', ',80.2515959', '13.0058155', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r\n\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-06-23 11:46:15', '2017-07-20 08:15:40', 0, 0, NULL, NULL),
(12, 'Men''s Paying Guest 3500 /- INR per month', 1, NULL, 'Kasturba Nagar', 'Chennai', 'Tamil Nadu', 'India', '600020', '80.2515959', '13.555', 'Nearby railway station, Kasturba nagar', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-06-23 11:46:15', '2017-07-20 08:15:40', 0, 0, NULL, NULL),
(13, 'Single 1 BHK Room beside IIT', 1, NULL, 'IIT, Madras', 'Chennai', 'Tamil Nadu', 'India', '600034', '79.928808', '13.0474098', 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.\r\n\r\nContrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.', 2, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-06-23 11:45:40', '2017-07-20 08:15:40', 0, 0, NULL, NULL),
(38, '1bhk-Padapai', 1, NULL, 'No.8 Nithyanandhapuram, East Street', 'Trichy', 'Tamil Nadu', 'India', '620008', '', '', NULL, 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-09-09 02:32:20', '2017-09-09 02:32:20', 0, 0, NULL, NULL),
(40, '3BHK', 1, NULL, 'No.8 Nithyanandhapuram, East Street', 'Trichy', 'Tamil Nadu', 'India', '620008', '', '', 'Property near bus stop', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-09-09 02:49:28', '2017-09-09 02:49:28', 0, 0, NULL, NULL),
(41, '2bhk-padapai', 1, NULL, 'No.8 Nithyanandhapuram, East Street', 'Chennai', 'Tamil Nadu', 'India', '', '', '', 'Great 2 BHK Apartment, walkable from bus terminal & railway station.', 1, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2017-09-09 04:34:01', '2017-09-09 04:34:01', 0, 0, NULL, NULL),
(42, 'lklkl', 1, NULL, '', '', '', '', '', '', '', NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 1, '0', NULL, NULL, NULL, NULL, NULL, 1, '2017-10-14 02:26:30', '2017-10-14 02:26:30', 0, 1, NULL, NULL),
(43, ' kjbnjnkjnjknjjk', 1, 15000, 'm,jhgfgvbnm.,', 'Chennai', 'Tamil Nadu', 'India', '600097', '1.21121', '3.22154', 'cool Property ', 0, 1, 3, 840, 124, 'Tamil Nadu', 'hgfgdghjkl', 'xcvbnm,', 'fdghjhkjkl.', 1, 0, 1, 0, 0, 1, '0', '2017-10-13', 200000, 0, 6, 2, 1, '2017-10-14 11:49:28', '2017-10-14 11:49:28', 0, 0, NULL, NULL),
(44, 'Anamik Villa', 1, 15000, 'Thoraipakkam ', 'MAITHON DAM', 'Jharkhand', 'India', '828207', '8939', '885859', 'Cool house next to Dam', 0, 0, 2, 840, NULL, 'Jharkhand', 'De Nobili ', 'Kalipahari', 'Kumardubi', 1, 0, 1, 0, 0, 1, '0', '2017-10-25', 150000, 0, 6, 2, 1, '2017-10-14 12:03:04', '2017-10-14 12:03:04', 0, 1, NULL, NULL),
(45, 'Ghhhhhh', 16, NULL, '', '', '', '', NULL, '', '', NULL, 0, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, 0, 0, 0, 0, 0, '0', NULL, NULL, NULL, NULL, NULL, 1, '2017-10-31 11:00:32', '2017-10-31 11:00:32', 0, 0, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_property_category`
--

CREATE TABLE IF NOT EXISTS `tbl_property_category` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `cat_name` varchar(100) DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '1',
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_property_images`
--

CREATE TABLE IF NOT EXISTS `tbl_property_images` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `pro_id` bigint(20) NOT NULL,
  `owner_id` bigint(20) NOT NULL,
  `image` varchar(191) NOT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '1',
  `ordering` bigint(20) NOT NULL DEFAULT '0',
  `deleted` tinyint(2) DEFAULT '0',
  `deleted_at` date DEFAULT NULL,
  `created_at` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `pro_id` (`pro_id`),
  KEY `owner_id` (`owner_id`),
  KEY `image` (`image`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=5 ;

--
-- Dumping data for table `tbl_property_images`
--

INSERT INTO `tbl_property_images` (`id`, `pro_id`, `owner_id`, `image`, `status`, `ordering`, `deleted`, `deleted_at`, `created_at`) VALUES
(1, 12, 1, 'b1b878f9ac816d0784ee7b7ad44bb406.jpg', 1, 0, 1, NULL, '2017-07-11 11:02:35'),
(2, 12, 1, '0a15350bdbbdd4b3bede03a525997ca4.jpg', 0, 0, 0, NULL, '2017-07-11 12:42:18'),
(3, 12, 1, 'd958bc7285c14d6f775973d6d723d17b.jpg', 1, 0, 1, NULL, '2017-07-11 12:44:56'),
(4, 21, 16, 'b1769d94389e6138512b844516977225.jpg', 0, 0, 0, NULL, '2017-08-02 03:18:22');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_schedule_visit`
--

CREATE TABLE IF NOT EXISTS `tbl_schedule_visit` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) NOT NULL,
  `property_id` bigint(20) NOT NULL,
  `scheduleDate` date NOT NULL,
  `scheduleTime` time DEFAULT NULL,
  `tenant_id` bigint(20) NOT NULL,
  `message` text,
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=''pending'',1=''approved''',
  `deleted` tinyint(2) NOT NULL DEFAULT '0',
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`,`property_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=26 ;

--
-- Dumping data for table `tbl_schedule_visit`
--

INSERT INTO `tbl_schedule_visit` (`id`, `owner_id`, `property_id`, `scheduleDate`, `scheduleTime`, `tenant_id`, `message`, `status`, `deleted`, `updated_at`, `created_at`, `deleted_at`) VALUES
(1, 1, 10, '2017-07-11', '02:01:00', 2, 'test', 2, 0, '2017-07-23 11:50:35', '2017-07-11 19:30:00', NULL),
(3, 1, 9, '2017-07-17', '12:10:00', 4, NULL, 2, 1, '2017-09-07 20:48:15', '2017-07-16 04:33:12', NULL),
(4, 1, 9, '2017-07-20', '12:00:00', 5, 'fdgfhjfhgfkgjkghv', 0, 0, NULL, '2017-07-16 19:12:08', NULL),
(5, 1, 9, '2017-07-17', '12:12:00', 4, 'sfsfsafas', 0, 0, NULL, '2017-07-16 19:12:10', NULL),
(6, 1, 10, '2017-07-17', '02:00:00', 4, NULL, 2, 1, '2017-09-07 20:56:08', '2017-07-16 20:59:26', NULL),
(7, 1, 9, '2017-07-19', '21:00:00', 3, 'hjghjgh', 0, 0, NULL, '2017-07-16 20:59:32', NULL),
(8, 1, 10, '2017-03-08', '02:01:00', 2, 'dsfsdfsdf svdsdfsdfsdf', 0, 0, NULL, '2017-07-17 01:01:39', NULL),
(9, 1, 11, '2017-02-01', '01:01:00', 2, 'sdfsdfsdfsdf', 2, 1, '2017-07-25 09:37:22', '2017-07-17 01:02:47', NULL),
(10, 1, 11, '2017-04-10', '23:23:00', 2, NULL, 2, 0, '2017-07-23 12:10:33', '2017-07-17 01:03:21', NULL),
(11, 1, 11, '2017-07-02', '12:01:00', 2, NULL, 1, 0, '2017-07-23 12:41:15', '2017-07-17 01:04:43', NULL),
(12, 1, 11, '2017-07-26', '12:21:00', 2, NULL, 1, 0, '2017-10-01 04:06:23', '2017-07-17 01:13:34', NULL),
(13, 1, 10, '2017-07-19', '12:12:00', 2, 'nhvjh', 0, 0, NULL, '2017-07-19 05:50:31', NULL),
(14, 1, 9, '2017-07-28', '12:31:00', 10, NULL, 0, 0, NULL, '2017-07-27 14:32:14', NULL),
(15, 1, 9, '2017-07-28', '08:31:00', 10, NULL, 0, 0, NULL, '2017-07-27 14:32:26', NULL),
(16, 1, 9, '2017-07-31', '17:05:00', 10, 'Wjje', 0, 0, NULL, '2017-07-30 02:59:26', NULL),
(17, 1, 11, '2017-08-17', '16:01:00', 2, 'Test Mail Please ignore', 0, 0, NULL, '2017-07-31 08:41:11', NULL),
(18, 1, 11, '2017-08-17', '16:01:00', 2, 'Test Mail Please ignore', 0, 0, NULL, '2017-07-31 08:51:04', NULL),
(19, 1, 11, '2017-08-17', '16:01:00', 2, 'Test Mail Please ignore', 0, 0, NULL, '2017-07-31 08:52:30', NULL),
(20, 1, 11, '2017-08-17', '16:01:00', 2, 'Test Mail Please ignore', 0, 0, NULL, '2017-07-31 08:52:40', NULL),
(21, 1, 11, '2017-08-02', '00:25:00', 2, 'svfdfsd', 0, 0, NULL, '2017-07-31 08:56:10', NULL),
(22, 1, 9, '2017-07-30', '21:58:00', 2, NULL, 0, 0, NULL, '2017-08-01 05:25:21', NULL),
(23, 1, 11, '2017-08-18', '11:59:00', 8, NULL, 0, 0, NULL, '2017-08-04 19:21:13', NULL),
(24, 1, 10, '2017-08-09', '01:00:00', 8, 'rasdghsd', 0, 0, NULL, '2017-08-04 19:23:08', NULL),
(25, 1, 10, '2017-09-29', '13:30:00', 2, 'Would like to rent your property.', 0, 0, NULL, '2017-10-01 00:43:57', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_super_admin`
--

CREATE TABLE IF NOT EXISTS `tbl_super_admin` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` text COLLATE utf8mb4_unicode_ci,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  `status` smallint(6) NOT NULL DEFAULT '1',
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_super_admin_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=4294967295 ;

--
-- Dumping data for table `tbl_super_admin`
--

INSERT INTO `tbl_super_admin` (`id`, `name`, `email`, `password`, `image`, `phone`, `about`, `remember_token`, `created_at`, `updated_at`, `status`) VALUES
(4294967295, 'Anamik Adhikary', 'anamik@flarow.com', '827ccb0eea8a706c4c34a16891f84e7b', 'c35624e2cceae64a8589f7aa04c411b2.jpg', '0987654321', 'testing about', NULL, '2017-06-18 19:30:00', '2017-06-18 19:30:00', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_tenants`
--

CREATE TABLE IF NOT EXISTS `tbl_tenants` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `image` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` text COLLATE utf8mb4_unicode_ci,
  `address` text COLLATE utf8mb4_unicode_ci,
  `facebook` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `googleplus` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verfy_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(2) NOT NULL DEFAULT '0',
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=21 ;

--
-- Dumping data for table `tbl_tenants`
--

INSERT INTO `tbl_tenants` (`id`, `name`, `email`, `password`, `image`, `phone`, `about`, `address`, `facebook`, `twitter`, `googleplus`, `remember_token`, `verfy_code`, `status`, `created_at`, `updated_at`, `deleted`, `deleted_at`) VALUES
(2, 'sandeep kumar dan', 'sandeepkumardan@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '462058dbcf457b73c1d49f618acc0201.png', '123124234325345', 'Test data', NULL, 'https://www.facebook.com/wordpresstechsupport/', '#', 'https://www.facebook.com/wordpresstechsupport/', NULL, 'cb3a77cafd886ec49a608782609f20ff', 1, NULL, '2017-08-01 05:20:43', 0, '0000-00-00'),
(3, 'sandeep kumar dan', 'sandeep@gmail.com', 'fcea920f7412b5da7be0cf42b8c93759', NULL, '078976642213', NULL, NULL, NULL, NULL, NULL, NULL, '8cd9bdf4b8fedc516e5f9cc750602caa', 1, NULL, '2017-07-21 01:42:40', 0, '0000-00-00'),
(4, 'Anamik', 'anamik.adhikary@flarow.com', '6d61bc72da28e32dc690b4f6908abe86', 'c8d07e8982eec15cf1002efafc1d7cf8.jpg', '5344564567564', NULL, NULL, NULL, NULL, NULL, NULL, 'b77fe75ea147a45353a53a99060c7b41', 1, NULL, '2017-07-22 11:28:41', 0, '0000-00-00'),
(5, 'Saket', 'mayanksaket3901@gmail.com', 'bd82e687cf22309261fffa9e316f6d3b', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '97f6c4b24c9ad059c9bb1fd240e3f5fe', 0, NULL, '2017-07-21 01:42:40', 0, '0000-00-00'),
(8, 'pughalveni', 'pughal@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '2654b28c361540896a3e667d10c9d849', 0, NULL, '2017-07-21 01:42:40', 0, '0000-00-00'),
(9, 'Anamik', 'anamik3525@yahoo.in', '4ce2157b9dbc3623ebadd450ceac9f0d', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '3f4833ec9beff8c2fcd607d49de3e8e1', 0, '2017-07-27 06:25:59', NULL, 0, NULL),
(10, 'Pughalveni.r@gmail.com', 'pughalveni.r@gmail.com', '827ccb0eea8a706c4c34a16891f84e7b', '1257f03b8da70ee422a08163f455a172.jpg', '12321312312', NULL, NULL, NULL, NULL, NULL, NULL, '68a1d9365d2bf52e06d7b5dd4be9bd61', 0, '2017-07-27 14:29:57', '2017-08-02 18:42:51', 0, NULL),
(14, 'Pughalveni R', 'pughalveni1989@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '3aa963e484fac3312fe06033ac95852e', 0, '2017-07-30 02:56:28', NULL, 0, NULL),
(15, 'Subramaniam', 'subbu5569@yahoo.com.sg', '428054181d2acf5da61119db775997ab', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '904b70a263a207953fd064c9efde556e', 0, '2017-07-30 19:23:15', NULL, 0, NULL),
(16, 'Sivaramasethu K', 'anamik.adhikary@cognizant.com', 'd41d8cd98f00b204e9800998ecf8427e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 'b3b31f5e36b88f77a66787c4681623dc', 0, '2017-08-03 06:44:44', NULL, 0, NULL),
(17, 'smita', 'naincy.smita93@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, '8156aa08fee4f705f0d9eac1a0f25fbb', 0, '2017-08-03 06:57:29', NULL, 0, NULL),
(18, 'TestLogin', 'TestLogin@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', NULL, '12314464646', NULL, NULL, NULL, NULL, NULL, NULL, '598992d4db201432c8ce1157effe00a1', 0, '2017-08-04 19:15:58', NULL, 0, NULL),
(19, 'TestUser', 'TestUser@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', NULL, '12345634333', NULL, NULL, NULL, NULL, NULL, NULL, '3b6456e3cc0db0f1581215b70a694538', 0, '2017-08-04 19:16:58', NULL, 0, NULL),
(20, 'Test123', 'Test123@gmail.com', 'd41d8cd98f00b204e9800998ecf8427e', NULL, '1233435253252', NULL, NULL, NULL, NULL, NULL, NULL, '71ead1699fe4c84334b52e56267ced35', 0, '2017-08-04 19:18:41', NULL, 0, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_ticket`
--

CREATE TABLE IF NOT EXISTS `tbl_ticket` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `owner_id` bigint(20) NOT NULL,
  `property_id` bigint(20) NOT NULL,
  `tenant_id` bigint(20) NOT NULL,
  `message` text,
  `status` tinyint(2) NOT NULL DEFAULT '0' COMMENT '0=''pending'',1=''approved''',
  `deleted` tinyint(2) NOT NULL DEFAULT '0',
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `owner_id` (`owner_id`,`property_id`)
) ENGINE=MyISAM  DEFAULT CHARSET=latin1 AUTO_INCREMENT=4 ;

--
-- Dumping data for table `tbl_ticket`
--

INSERT INTO `tbl_ticket` (`id`, `owner_id`, `property_id`, `tenant_id`, `message`, `status`, `deleted`, `updated_at`, `created_at`, `deleted_at`) VALUES
(3, 1, 11, 2, 'test', 1, 0, '2017-09-29 05:50:30', '2017-07-26 09:05:59', NULL);

-- --------------------------------------------------------

--
-- Table structure for table `trackings`
--

CREATE TABLE IF NOT EXISTS `trackings` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `ip` varchar(20) COLLATE utf8_unicode_ci NOT NULL DEFAULT '',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=156 ;

--
-- Dumping data for table `trackings`
--

INSERT INTO `trackings` (`id`, `ip`, `created_at`, `updated_at`) VALUES
(1, '203.99.198.43', '2017-10-03 15:35:18', '2017-10-03 15:35:18'),
(2, '203.99.198.43', '2017-10-03 15:36:24', '2017-10-03 15:36:24'),
(3, '203.99.198.43', '2017-10-03 15:38:41', '2017-10-03 15:38:41'),
(4, '139.167.3.60', '2017-10-03 19:48:50', '2017-10-03 19:48:50'),
(5, '139.167.3.60', '2017-10-03 20:30:00', '2017-10-03 20:30:00'),
(6, '139.167.3.60', '2017-10-03 20:31:07', '2017-10-03 20:31:07'),
(7, '139.167.3.60', '2017-10-03 20:38:02', '2017-10-03 20:38:02'),
(8, '139.167.3.60', '2017-10-03 20:38:46', '2017-10-03 20:38:46'),
(9, '139.167.3.60', '2017-10-03 20:39:11', '2017-10-03 20:39:11'),
(10, '139.167.3.60', '2017-10-03 20:50:08', '2017-10-03 20:50:08'),
(11, '139.167.3.60', '2017-10-03 21:05:22', '2017-10-03 21:05:22'),
(12, '139.167.3.60', '2017-10-03 21:07:27', '2017-10-03 21:07:27'),
(13, '139.167.3.60', '2017-10-03 21:10:28', '2017-10-03 21:10:28'),
(14, '139.167.3.60', '2017-10-03 21:13:51', '2017-10-03 21:13:51'),
(15, '139.167.3.60', '2017-10-03 21:20:55', '2017-10-03 21:20:55'),
(16, '139.167.3.60', '2017-10-03 21:31:51', '2017-10-03 21:31:51'),
(17, '139.167.3.60', '2017-10-03 21:32:07', '2017-10-03 21:32:07'),
(18, '139.167.3.60', '2017-10-03 21:32:50', '2017-10-03 21:32:50'),
(19, '139.167.3.60', '2017-10-03 21:34:16', '2017-10-03 21:34:16'),
(20, '139.167.3.60', '2017-10-03 21:50:56', '2017-10-03 21:50:56'),
(21, '139.167.3.60', '2017-10-03 21:57:20', '2017-10-03 21:57:20'),
(22, '139.167.3.60', '2017-10-03 21:58:05', '2017-10-03 21:58:05'),
(23, '144.36.211.128', '2017-10-04 15:56:18', '2017-10-04 15:56:18'),
(24, '106.208.235.43', '2017-10-10 10:33:42', '2017-10-10 10:33:42'),
(25, '106.208.235.43', '2017-10-10 10:43:45', '2017-10-10 10:43:45'),
(26, '106.208.235.43', '2017-10-10 10:48:03', '2017-10-10 10:48:03'),
(27, '157.50.8.176', '2017-10-10 13:59:26', '2017-10-10 13:59:26'),
(28, '157.50.9.5', '2017-10-10 19:42:37', '2017-10-10 19:42:37'),
(29, '157.50.9.5', '2017-10-10 19:56:25', '2017-10-10 19:56:25'),
(30, '106.208.147.100', '2017-10-12 00:15:41', '2017-10-12 00:15:41'),
(31, '106.208.245.9', '2017-10-12 01:43:30', '2017-10-12 01:43:30'),
(32, '106.208.150.160', '2017-10-13 00:47:19', '2017-10-13 00:47:19'),
(33, '106.208.150.160', '2017-10-13 00:49:17', '2017-10-13 00:49:17'),
(34, '106.208.150.160', '2017-10-13 00:49:18', '2017-10-13 00:49:18'),
(35, '106.208.150.160', '2017-10-13 01:00:17', '2017-10-13 01:00:17'),
(36, '106.208.150.160', '2017-10-13 01:06:16', '2017-10-13 01:06:16'),
(37, '157.50.20.230', '2017-10-14 02:23:46', '2017-10-14 02:23:46'),
(38, '106.203.89.66', '2017-10-14 10:34:54', '2017-10-14 10:34:54'),
(39, '106.203.83.81', '2017-10-14 11:30:48', '2017-10-14 11:30:48'),
(40, '106.203.83.81', '2017-10-14 11:50:19', '2017-10-14 11:50:19'),
(41, '106.203.83.81', '2017-10-14 11:59:07', '2017-10-14 11:59:07'),
(42, '106.203.83.81', '2017-10-14 12:03:29', '2017-10-14 12:03:29'),
(43, '106.208.235.249', '2017-10-14 16:07:25', '2017-10-14 16:07:25'),
(44, '106.203.97.183', '2017-10-15 01:16:51', '2017-10-15 01:16:51'),
(45, '157.50.20.84', '2017-10-15 14:14:45', '2017-10-15 14:14:45'),
(46, '157.50.20.228', '2017-10-17 01:20:07', '2017-10-17 01:20:07'),
(47, '157.50.11.91', '2017-10-17 02:53:07', '2017-10-17 02:53:07'),
(48, '157.50.11.91', '2017-10-17 02:53:16', '2017-10-17 02:53:16'),
(49, '157.50.8.67', '2017-10-21 02:15:40', '2017-10-21 02:15:40'),
(50, '157.50.8.67', '2017-10-21 02:16:23', '2017-10-21 02:16:23'),
(51, '106.208.206.243', '2017-10-21 11:22:44', '2017-10-21 11:22:44'),
(52, '106.203.105.170', '2017-10-21 12:04:47', '2017-10-21 12:04:47'),
(53, '106.203.105.170', '2017-10-21 12:06:05', '2017-10-21 12:06:05'),
(54, '106.203.123.87', '2017-10-21 21:00:09', '2017-10-21 21:00:09'),
(55, '157.50.10.216', '2017-10-30 15:55:37', '2017-10-30 15:55:37'),
(56, '157.50.10.216', '2017-10-30 15:57:17', '2017-10-30 15:57:17'),
(57, '157.50.10.216', '2017-10-30 15:58:06', '2017-10-30 15:58:06'),
(58, '157.50.11.243', '2017-10-31 01:01:14', '2017-10-31 01:01:14'),
(59, '157.50.11.243', '2017-10-31 01:01:43', '2017-10-31 01:01:43'),
(60, '157.50.11.243', '2017-10-31 01:07:13', '2017-10-31 01:07:13'),
(61, '157.50.11.243', '2017-10-31 01:07:50', '2017-10-31 01:07:50'),
(62, '106.203.92.6', '2017-10-31 09:01:31', '2017-10-31 09:01:31'),
(63, '106.203.109.182', '2017-10-31 16:42:37', '2017-10-31 16:42:37'),
(64, '157.50.8.21', '2017-10-31 17:54:54', '2017-10-31 17:54:54'),
(65, '144.36.211.128', '2017-11-01 16:32:52', '2017-11-01 16:32:52'),
(66, '144.36.211.128', '2017-11-08 13:18:03', '2017-11-08 13:18:03'),
(67, '106.203.66.250', '2017-11-08 18:04:46', '2017-11-08 18:04:46'),
(68, '157.50.20.241', '2017-11-10 16:09:20', '2017-11-10 16:09:20'),
(69, '157.50.20.241', '2017-11-10 16:11:04', '2017-11-10 16:11:04'),
(70, '157.50.20.241', '2017-11-10 16:17:08', '2017-11-10 16:17:08'),
(71, '157.50.20.241', '2017-11-10 16:22:56', '2017-11-10 16:22:56'),
(72, '144.36.211.128', '2017-11-10 18:04:07', '2017-11-10 18:04:07'),
(73, '157.50.8.9', '2017-11-10 19:22:24', '2017-11-10 19:22:24'),
(74, '157.50.9.195', '2017-11-10 20:07:26', '2017-11-10 20:07:26'),
(75, '157.50.21.70', '2017-11-12 11:23:43', '2017-11-12 11:23:43'),
(76, '106.208.177.147', '2017-11-12 20:29:28', '2017-11-12 20:29:28'),
(77, '157.50.14.24', '2017-11-14 21:18:48', '2017-11-14 21:18:48'),
(78, '117.97.217.222', '2017-11-15 01:12:00', '2017-11-15 01:12:00'),
(79, '182.65.74.174', '2017-11-15 15:10:27', '2017-11-15 15:10:27'),
(80, '106.208.146.115', '2017-11-16 00:23:54', '2017-11-16 00:23:54'),
(81, '144.36.211.128', '2017-11-16 11:18:43', '2017-11-16 11:18:43'),
(82, '144.36.211.128', '2017-11-17 18:53:41', '2017-11-17 18:53:41'),
(83, '182.65.78.246', '2017-11-19 19:48:54', '2017-11-19 19:48:54'),
(84, '182.65.78.246', '2017-11-19 19:51:47', '2017-11-19 19:51:47'),
(85, '182.65.78.246', '2017-11-19 20:03:03', '2017-11-19 20:03:03'),
(86, '157.50.23.170', '2017-11-20 00:45:51', '2017-11-20 00:45:51'),
(87, '157.50.23.170', '2017-11-20 00:48:03', '2017-11-20 00:48:03'),
(88, '182.65.46.192', '2017-11-22 00:46:34', '2017-11-22 00:46:34'),
(89, '157.50.20.40', '2017-11-22 01:34:35', '2017-11-22 01:34:35'),
(90, '157.50.20.40', '2017-11-22 01:35:26', '2017-11-22 01:35:26'),
(91, '157.50.20.40', '2017-11-22 01:36:32', '2017-11-22 01:36:32'),
(92, '157.50.20.40', '2017-11-22 01:37:39', '2017-11-22 01:37:39'),
(93, '157.50.20.40', '2017-11-22 01:48:44', '2017-11-22 01:48:44'),
(94, '157.50.20.40', '2017-11-22 01:52:29', '2017-11-22 01:52:29'),
(95, '122.178.78.41', '2017-11-22 11:32:48', '2017-11-22 11:32:48'),
(96, '122.178.78.41', '2017-11-22 11:53:31', '2017-11-22 11:53:31'),
(97, '157.50.21.33', '2017-11-22 17:20:16', '2017-11-22 17:20:16'),
(98, '122.178.78.41', '2017-11-23 12:04:26', '2017-11-23 12:04:26'),
(99, '122.178.78.41', '2017-11-24 00:48:54', '2017-11-24 00:48:54'),
(100, '42.111.195.44', '2017-11-25 02:33:46', '2017-11-25 02:33:46'),
(101, '106.208.187.250', '2017-11-25 23:00:34', '2017-11-25 23:00:34'),
(102, '106.208.243.141', '2017-11-28 22:15:42', '2017-11-28 22:15:42'),
(103, '106.208.237.34', '2017-11-29 01:12:00', '2017-11-29 01:12:00'),
(104, '106.203.123.53', '2017-11-29 21:32:28', '2017-11-29 21:32:28'),
(105, '106.208.183.194', '2017-11-29 23:03:25', '2017-11-29 23:03:25'),
(106, '182.65.62.216', '2017-12-01 12:34:53', '2017-12-01 12:34:53'),
(107, '106.203.64.111', '2017-12-04 22:01:49', '2017-12-04 22:01:49'),
(108, '106.208.175.115', '2017-12-09 17:42:51', '2017-12-09 17:42:51'),
(109, '106.208.159.141', '2017-12-10 21:43:30', '2017-12-10 21:43:30'),
(110, '182.65.38.139', '2017-12-16 01:22:27', '2017-12-16 01:22:27'),
(111, '182.65.38.139', '2017-12-16 01:24:26', '2017-12-16 01:24:26'),
(112, '122.164.254.68', '2017-12-16 16:59:42', '2017-12-16 16:59:42'),
(113, '106.208.242.116', '2017-12-17 14:38:49', '2017-12-17 14:38:49'),
(114, '122.164.247.105', '2017-12-19 17:50:43', '2017-12-19 17:50:43'),
(115, '106.203.118.227', '2017-12-26 13:14:14', '2017-12-26 13:14:14'),
(116, '157.50.9.21', '2017-12-28 01:07:11', '2017-12-28 01:07:11'),
(117, '157.50.9.21', '2017-12-28 01:07:35', '2017-12-28 01:07:35'),
(118, '157.50.9.21', '2017-12-28 01:07:52', '2017-12-28 01:07:52'),
(119, '106.219.9.140', '2017-12-28 01:40:38', '2017-12-28 01:40:38'),
(120, '223.176.142.62', '2017-12-28 18:57:06', '2017-12-28 18:57:06'),
(121, '223.176.142.62', '2017-12-28 19:03:21', '2017-12-28 19:03:21'),
(122, '223.176.142.62', '2017-12-28 19:40:10', '2017-12-28 19:40:10'),
(123, '106.219.245.68', '2017-12-29 01:37:15', '2017-12-29 01:37:15'),
(124, '210.18.146.139', '2017-12-29 14:02:09', '2017-12-29 14:02:09'),
(125, '110.224.9.240', '2017-12-29 18:03:36', '2017-12-29 18:03:36'),
(126, '110.224.9.240', '2017-12-29 18:04:50', '2017-12-29 18:04:50'),
(127, '27.5.178.231', '2017-12-29 22:34:48', '2017-12-29 22:34:48'),
(128, '42.111.171.199', '2017-12-30 08:49:21', '2017-12-30 08:49:21'),
(129, '42.111.171.199', '2017-12-30 08:49:30', '2017-12-30 08:49:30'),
(130, '42.111.171.199', '2017-12-30 08:49:31', '2017-12-30 08:49:31'),
(131, '42.111.171.199', '2017-12-30 08:49:31', '2017-12-30 08:49:31'),
(132, '42.111.171.199', '2017-12-30 08:49:32', '2017-12-30 08:49:32'),
(133, '42.111.171.199', '2017-12-30 08:49:32', '2017-12-30 08:49:32'),
(134, '42.111.171.199', '2017-12-30 08:49:33', '2017-12-30 08:49:33'),
(135, '42.111.171.199', '2017-12-30 08:49:43', '2017-12-30 08:49:43'),
(136, '42.111.171.199', '2017-12-30 08:49:46', '2017-12-30 08:49:46'),
(137, '42.111.171.199', '2017-12-30 08:49:47', '2017-12-30 08:49:47'),
(138, '42.111.171.199', '2017-12-30 08:49:53', '2017-12-30 08:49:53'),
(139, '42.111.171.199', '2017-12-30 08:49:58', '2017-12-30 08:49:58'),
(140, '42.111.171.199', '2017-12-30 08:51:20', '2017-12-30 08:51:20'),
(141, '115.69.254.205', '2017-12-31 22:11:37', '2017-12-31 22:11:37'),
(142, '223.176.146.220', '2018-01-02 14:41:29', '2018-01-02 14:41:29'),
(143, '157.50.13.115', '2018-01-02 21:57:50', '2018-01-02 21:57:50'),
(144, '157.50.13.115', '2018-01-02 22:56:10', '2018-01-02 22:56:10'),
(145, '27.60.133.82', '2018-01-03 14:41:31', '2018-01-03 14:41:31'),
(146, '27.60.133.82', '2018-01-03 14:41:32', '2018-01-03 14:41:32'),
(147, '27.60.133.82', '2018-01-03 14:41:32', '2018-01-03 14:41:32'),
(148, '27.60.133.82', '2018-01-03 14:41:32', '2018-01-03 14:41:32'),
(149, '223.185.246.86', '2018-01-03 19:00:23', '2018-01-03 19:00:23'),
(150, '122.174.18.69', '2018-01-03 20:46:26', '2018-01-03 20:46:26'),
(151, '122.174.18.69', '2018-01-03 20:47:29', '2018-01-03 20:47:29'),
(152, '122.174.18.69', '2018-01-03 20:48:21', '2018-01-03 20:48:21'),
(153, '122.174.18.69', '2018-01-03 20:50:27', '2018-01-03 20:50:27'),
(154, '157.50.20.13', '2018-01-03 23:05:50', '2018-01-03 23:05:50'),
(155, '106.219.251.36', '2018-01-04 11:50:47', '2018-01-04 11:50:47');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE IF NOT EXISTS `users` (
  `id` int(10) unsigned NOT NULL AUTO_INCREMENT,
  `userid` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `name` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `email` varchar(255) COLLATE utf8_unicode_ci NOT NULL,
  `mobile` bigint(10) NOT NULL,
  `password` varchar(60) COLLATE utf8_unicode_ci NOT NULL,
  `type` int(1) DEFAULT NULL,
  `status` int(11) DEFAULT '0',
  `created_at` timestamp NULL DEFAULT NULL,
  `updated_at` timestamp NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci AUTO_INCREMENT=152 ;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `userid`, `name`, `email`, `mobile`, `password`, `type`, `status`, `created_at`, `updated_at`) VALUES
(1, '', 'owner', 'owner@flarow.com', 9842765432, '$2y$10$iYf/PVAqq48RH4XzfWAFpO9p4/DEb6KKg5Pc/Vxk5UgTI2mzTciwm', 1, 0, '2016-06-20 12:13:30', '2016-07-15 12:34:34'),
(2, '', 'tenant', 'tenant@flarow.com', 9842765432, '$2y$10$iYf/PVAqq48RH4XzfWAFpO9p4/DEb6KKg5Pc/Vxk5UgTI2mzTciwm', 0, 0, '2016-06-20 12:13:30', '2016-07-15 12:34:34'),
(3, '', 'admin', 'admin@flarow.com', 9842765432, '$2y$10$iYf/PVAqq48RH4XzfWAFpO9p4/DEb6KKg5Pc/Vxk5UgTI2mzTciwm', 2, 0, '2016-06-20 12:13:30', '2016-07-15 12:34:34'),
(16, '', '', 'u.umaesh@gmail.com', 9791225533, '$2y$10$bfnxwnlZgPvjEOBrVKKiMu5m3PcJsc0567jJgrhAFwQX6q3tBFEVy', 1, 0, '2017-09-20 14:44:16', '2017-09-20 14:44:16'),
(19, 'aanacheckit@gmail.com', '', 'aanacheckit@gmail.com', 8939885859, '$2y$10$elXtacc/Vvepxw1E9ZZDAe3qAYVHA9oxccPKakTjk.jz0o0wE0qWe', 0, 0, '2017-10-03 15:44:53', '2017-11-24 00:48:38'),
(20, 'mayanksaket80@gmail.com', '', 'mayanksaket80@gmail.com', 8755018860, '$2y$10$yOQzbEsE..HvmxMmTxje0.gZJ094xlys3GzcLal/yiKYpOI.gacpu', 0, 1, '2017-10-03 19:57:33', '2017-10-03 19:57:33'),
(23, 'mayanksaket3901@gmail.com', '', 'mayanksaket3901@gmail.com', 8755018860, '$2y$10$WwAsuzV8o9xnceQZhkLlb.e7rwSX92waHcLVZfEnVLol5nxOwk25e', 0, 1, '2017-10-03 19:59:35', '2017-10-03 19:59:35'),
(24, 'mayanksaket@gmail.com', '', 'mayanksaket@gmail.com', 7017919241, '$2y$10$UklCFy.W84BmfCCyyjixAumkVEHyI/PZ6LhYV/Jr2zj91WPyN7MJa', 1, 0, '2017-10-03 20:41:23', '2017-10-03 20:41:23'),
(25, 'pughalveni.r@gmail.com', '', 'pughalveni.r@gmail.com', 9962299160, '$2y$10$uraYDATOR/fmOfyNS252oeBi0EMnskxQyqt0784xwX6EF0As2Og4C', 0, 0, '2017-10-04 15:54:01', '2017-10-04 15:54:01'),
(104, 'jayashree9212@gmail.com', 'Jaya', 'jayashree9212@gmail.com', 9790942976, '$2y$10$SqULtvA4WOhhQDgQcSM.puqs06fT/QwvbuycPHXo8/NoVoGQ8EuI.', 0, 0, '2017-11-10 18:02:55', '2017-11-10 18:02:55'),
(110, 'pughalveni1989@gmail.com', 'Pughalveni', 'pughalveni1989@gmail.com', 9962299160, '$2y$10$dYFkRsoOMJpoH4hyO4UZ6ONaj7.ScyiAT0vRli8FJp8/YL12a7vt2', 0, 0, '2017-11-10 20:06:27', '2017-11-10 20:06:27'),
(120, 'ak.ad24@gmail.com', 'Subarna', 'ak.ad24@gmail.com', 9430374362, '$2y$10$L75jU2Db4r13xjBwTpUP/.rYufZLaGXyaczjnLfY3twNYlgl3c25i', 1, 0, '2017-11-11 10:54:08', '2017-11-11 10:54:08'),
(121, 'mailtosambavi@gmail.com', 'Sambavi Devi R', 'mailtosambavi@gmail.com', 8098488698, '$2y$10$9yhol5WOaJPiq5VPTX/fruZnFqsxRgVcyoXC4O2vk6RAK4clmoqvu', 0, 0, '2017-11-11 12:15:07', '2017-11-11 12:15:07'),
(122, 'rajanthangam28@gmail.com', 'Rajan', 'rajanthangam28@gmail.com', 7358555991, '$2y$10$oGjhvkEMdqyUktekjoRJqeOyiaJjBned5INi4nAkrQHcrBkGujYey', 0, 0, '2017-11-11 18:47:51', '2017-11-11 18:47:51'),
(126, 'sivaramansk.sivam@gmail.com', 'Sivaramasethu K', 'sivaramansk.sivam@gmail.com', 9962237677, '$2y$10$O5.Mwb0A0yeUZ4fpNp0NbepDlYSF8iWzOulV/DySETJylF07UuZkq', 0, 0, '2017-11-15 15:05:31', '2017-11-15 15:05:31'),
(128, 'sivaraman.sivam@gmail.com', 'SIvaramasethu K', 'sivaraman.sivam@gmail.com', 9962237677, '$2y$10$H5aEFykv7qKKg5mWEF7L5enBAGlvpL7Rw6MAO4heLitAzPmfE2RhK', 0, 0, '2017-11-15 15:08:18', '2017-11-15 15:08:18'),
(136, 'devisekar1611@gmail.com', 'Kamachi devi', 'devisekar1611@gmail.com', 9445242339, '$2y$10$a.f.D.ndk36Q.d951YY4oOmnwl6OTn9TakLIuyMZiZJ9VBGYlhrly', 0, 0, '2017-11-16 13:45:58', '2017-11-16 13:45:58'),
(137, 'vnreddy1993@gmail.com', 'Nagarajuna', 'vnreddy1993@gmail.com', 9985958313, '$2y$10$5RheDfjZQVEm8ydjWYpXI.Tf9xgT02rURhNJHZeeIBLgxmpwOB3N6', 0, 0, '2017-11-22 00:45:37', '2017-11-22 00:45:37'),
(139, 'jai99363@gmail.com', 'Jaikumar', 'jai99363@gmail.com', 9884349350, '$2y$10$eJEO3VtE8WXXcPPyWUR1eOrZEnOYtICERksYh/PbEPDYwupzRLcES', 0, 0, '2017-11-22 01:57:27', '2017-11-22 01:57:27'),
(140, 'anamik3525@yahoo.in', 'Shashi', 'anamik3525@yahoo.in', 8939885859, '$2y$10$YbpBfK4J8NTW2emdPm7Ac.yqJ5oiv4d/xgQuq.2sp0SoZnsfjZb9u', 1, 0, '2017-11-29 22:08:09', '2017-11-29 22:08:09'),
(141, 'aakashsalunkhe@gmail.com', 'Akash Salunkhe', 'aakashsalunkhe@gmail.com', 8828107482, '$2y$10$XfLc8/oN2jTGtv1ZioJpT.rxcqkFIM958Z1WCmx4GhzduV0b3oNW2', 1, 0, '2017-12-22 18:59:06', '2017-12-31 22:11:15'),
(142, 'mayanksaket3901@hotmail.com', 'Saket3901', 'mayanksaket3901@hotmail.com', 8755018860, '$2y$10$lDePykBRfZDHI00FM/rlKOtHNNVAWJrrNVIFmks2f2uEleHPSrTw6', 1, 0, '2017-12-28 19:00:20', '2017-12-28 19:00:20'),
(145, 'mayanksaket80@hotmail.com', 'Saket3901', 'mayanksaket80@hotmail.com', 8755018860, '$2y$10$l6CCJEWCW3vl0E3u3wSu2OOktUwtjcMxm/IdqNNVJUr.Owzr0cBFm', 1, 0, '2017-12-28 19:02:08', '2017-12-28 19:02:08'),
(147, 'mayanksaket90@hotmail.com', 'sefsfssf', 'mayanksaket90@hotmail.com', 8755018860, '$2y$10$QUadpv4gvG5xw1QGD4y0EeCIu1XmnaXTYZXAntBSmtDn2NewrcAXu', 0, 0, '2017-12-28 19:31:47', '2017-12-28 19:31:47'),
(151, 'sethu.sivam@gmail.com', 'Sivaramasethu K', 'sethu.sivam@gmail.com', 9962237677, '$2y$10$IG7eJ9zzFw3IELLJTNe9Q.8ofIZM1NnbUtxXFTIH2o5meytUCxaH6', 0, 0, '2017-12-29 22:31:24', '2018-01-03 20:50:02');

-- --------------------------------------------------------

--
-- Table structure for table `user_profile`
--

CREATE TABLE IF NOT EXISTS `user_profile` (
  `id` bigint(20) unsigned NOT NULL AUTO_INCREMENT,
  `user_id` int(10) DEFAULT NULL,
  `fname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `lname` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `email` varchar(191) COLLATE utf8mb4_unicode_ci NOT NULL,
  `phone` varchar(15) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `about` text COLLATE utf8mb4_unicode_ci,
  `address` text COLLATE utf8mb4_unicode_ci,
  `city` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `state` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `country` varchar(30) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `zip` varchar(10) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `facebook` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `twitter` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `googleplus` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `remember_token` varchar(100) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `verfy_code` varchar(191) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `status` tinyint(2) NOT NULL DEFAULT '0',
  `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `updated_at` timestamp NULL DEFAULT NULL ON UPDATE CURRENT_TIMESTAMP,
  `deleted` tinyint(2) NOT NULL DEFAULT '0',
  `deleted_at` date DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `tbl_users_email_unique` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci AUTO_INCREMENT=44 ;

--
-- Dumping data for table `user_profile`
--

INSERT INTO `user_profile` (`id`, `user_id`, `fname`, `lname`, `email`, `phone`, `about`, `address`, `city`, `state`, `country`, `zip`, `facebook`, `twitter`, `googleplus`, `remember_token`, `verfy_code`, `status`, `created_at`, `updated_at`, `deleted`, `deleted_at`) VALUES
(3, 1, 'Jagadeash', 'R', 'sm@gmail.com', '7868071158', 'Landlord with multiple properties', '2/331 A1-Block, Greenwoods Apartments, Morais city, Sembattu', 'Namakkal', 'Sembattu, Airport road', 'India', '620007', NULL, NULL, NULL, NULL, NULL, 0, '2017-09-09 02:42:39', '2017-09-30 07:44:18', 0, NULL),
(4, 19, NULL, NULL, 'aanacheckit@gmail.com', '8939885859', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-10-03 15:44:53', NULL, 0, NULL),
(5, 20, NULL, NULL, 'mayanksaket80@gmail.com', '8755018860', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2017-10-03 19:57:33', '2017-10-03 21:38:07', 0, NULL),
(6, 23, NULL, NULL, 'mayanksaket3901@gmail.com', '8755018860', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 1, '2017-10-03 19:59:35', '2017-10-03 21:37:52', 0, NULL),
(7, 24, NULL, NULL, 'mayanksaket@gmail.com', '7017919241', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-10-03 20:41:23', NULL, 0, NULL),
(8, 25, NULL, NULL, 'pughalveni.r@gmail.com', '9962299160', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-10-04 15:54:01', NULL, 0, NULL),
(21, 104, 'Jaya', NULL, 'jayashree9212@gmail.com', '9790942976', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-10 11:02:55', NULL, 0, NULL),
(24, 110, 'Pughalveni', NULL, 'pughalveni1989@gmail.com', '9962299160', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-10 13:06:27', NULL, 0, NULL),
(27, 120, 'Subarna', NULL, 'ak.ad24@gmail.com', '9430374362', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-11 03:54:08', NULL, 0, NULL),
(28, 121, 'Sambavi Devi R', NULL, 'mailtosambavi@gmail.com', '8098488698', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-11 05:15:07', NULL, 0, NULL),
(29, 122, 'Rajan', NULL, 'rajanthangam28@gmail.com', '7358555991', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-11 11:47:51', NULL, 0, NULL),
(32, 126, 'Sivaramasethu K', NULL, 'sivaramansk.sivam@gmail.com', '9962237677', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-15 08:05:31', NULL, 0, NULL),
(33, 128, 'SIvaramasethu K', NULL, 'sivaraman.sivam@gmail.com', '9962237677', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-15 08:08:18', NULL, 0, NULL),
(34, 136, 'Kamachi devi', NULL, 'devisekar1611@gmail.com', '9445242339', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-16 06:45:58', NULL, 0, NULL),
(35, 137, 'Nagarajuna', NULL, 'vnreddy1993@gmail.com', '9985958313', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-21 17:45:37', NULL, 0, NULL),
(37, 139, 'Jaikumar', NULL, 'jai99363@gmail.com', '9884349350', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-21 18:57:27', NULL, 0, NULL),
(38, 140, 'Shashi', NULL, 'anamik3525@yahoo.in', '8939885859', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-11-29 15:08:09', NULL, 0, NULL),
(39, 141, 'Akash Salunkhe', NULL, 'aakashsalunkhe@gmail.com', '8828107482', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-12-22 11:59:06', NULL, 0, NULL),
(40, 142, 'Saket3901', NULL, 'mayanksaket3901@hotmail.com', '8755018860', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-12-28 12:00:21', NULL, 0, NULL),
(41, 145, 'Saket3901', NULL, 'mayanksaket80@hotmail.com', '8755018860', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-12-28 12:02:08', NULL, 0, NULL),
(42, 147, 'sefsfssf', NULL, 'mayanksaket90@hotmail.com', '8755018860', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-12-28 12:31:47', NULL, 0, NULL),
(43, 151, 'Sivaramasethu K', NULL, 'sethu.sivam@gmail.com', '9962237677', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL, 0, '2017-12-29 15:31:24', NULL, 0, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
