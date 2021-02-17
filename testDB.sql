/*
SQLyog Enterprise Trial - MySQL GUI v8.05 
MySQL - 5.5.5-10.4.6-MariaDB : Database - Docto
*********************************************************************
*/


/*!40101 SET NAMES utf8 */;

/*!40101 SET SQL_MODE=''*/;

/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;

USE `TestApp`;

/*Table structure for table `UbicacionHospital` */

DROP TABLE IF EXISTS `lesson`;

CREATE TABLE `lesson` (
  `id_lesson` int(11) NOT NULL COMMENT 'Lesson unique identifier',
  `title_lesson` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Lesson title',
  `description_lesson` varchar(255) COLLATE latin1_spanish_ci DEFAULT NULL COMMENT 'Lesson description',
  PRIMARY KEY (`id_lesson`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `UbicacionHospital` */

LOCK TABLES `lesson` WRITE;

UNLOCK TABLES;

/*Table structure for table `UnidadesMedida` */

DROP TABLE IF EXISTS `note`;

CREATE TABLE `note` (
  `id_note` int(11) NOT NULL COMMENT 'Note unique identifier',
  `description_note` varchar(150) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Note description',
  `id_user` int(11) NOT NULL COMMENT 'Unique identifier of note creator',
  PRIMARY KEY (`id_note`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `UnidadesMedida` */

LOCK TABLES `note` WRITE;

UNLOCK TABLES;

/*Table structure for table `UsuarioDoctorWeb` */

DROP TABLE IF EXISTS `user`;

CREATE TABLE `user` (
  `id_user` int(11) NOT NULL COMMENT 'User unique identifier',
  `email_user` varchar(250) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User email ',
  `name_user` varchar(50) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User name ',
  `password_user` varchar(255) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User password',
  PRIMARY KEY (`id_user`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `UsuarioDoctorWeb` */

LOCK TABLES `user` WRITE;

UNLOCK TABLES;

/*Table structure for table `UsuarioDoctorWeb` */

DROP TABLE IF EXISTS `user_lesson`;

CREATE TABLE `user_lesson` (
  `id_user_lesson` int(11) NOT NULL COMMENT 'Unique identifier of relation between an user and a lesson',
  `id_user` varchar(250) COLLATE latin1_spanish_ci NOT NULL COMMENT 'User unique identifier',
  `id_lesson` varchar(50) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Lesson unique identifier',
  `status_lesson` varchar(100) COLLATE latin1_spanish_ci NOT NULL COMMENT ' Lesson status',
  PRIMARY KEY (`id_user_lesson`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `UsuarioDoctorWeb` */

LOCK TABLES `user_lesson` WRITE;

UNLOCK TABLES;

DROP TABLE IF EXISTS `note_lesson`;

CREATE TABLE `note_lesson` (
  `id_note_lesson` int(11) NOT NULL COMMENT 'Unique identifier of relation between a note and a lesson',
  `id_note` varchar(250) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Note unique identifier',
  `id_lesson` varchar(50) COLLATE latin1_spanish_ci NOT NULL COMMENT 'Lesson unique identifier',
  PRIMARY KEY (`id_note_lesson`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 COLLATE=latin1_spanish_ci;

/*Data for the table `UsuarioDoctorWeb` */

LOCK TABLES `note_lesson` WRITE;

UNLOCK TABLES;

ALTER TABLE note_lesson ADD FOREIGN KEY (id_note) REFERENCES note (id_note);
ALTER TABLE note_lesson ADD FOREIGN KEY (id_lesson) REFERENCES lesson (id_lesson);
ALTER TABLE user_lesson ADD FOREIGN KEY (id_user) REFERENCES user (id_user);
ALTER TABLE user_lesson ADD FOREIGN KEY (id_lesson) REFERENCES lesson (id_lesson);


/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;

INSERT INTO user (id_user, email_user, password_usser, name_user) VALUES
(1, "testuser@test.com", "c789e997e2322ceafa49170ee6b1dea8d46eef0e", "Test User"), /*User: testuser@test.com; Password: testapp2021*/
(2, "testuser2@test.com", "c789e997e2322ceafa49170ee6b1dea8d46eef0e", "Test User 2"); /*User: testuser2@test.com; Password: testapp2021*/


INSERT INTO lesson (id_lesson, title_lesson, description_lesson) VALUES
(1, "Guitar 101", "Basic guitar skills"),
(2, "Guitar 201", "Intermediate guitar skills"),
(3, "Piano 101", "Basic piano skills"),
(4, "Piano 201", "Intermediate piano skills");

INSERT INTO user_lesson (id_user_lesson, id_lesson, id_user, status_lesson) VALUES
(1, 1, 1, "Pending"),
(2, 3, 1, "Completed"),
(3, 1, 2, "In review");
