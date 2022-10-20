CREATE TABLE Users(
  id_user INT PRIMARY KEY AUTO_INCREMENT,
  username VARCHAR(16) NOT NULL UNIQUE,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(32) NOT NULL,
  roles ENUM('user', 'dataEntry', 'admin')
);

CREATE TABLE UsersDetails(
  id_users_details INT PRIMARY KEY AUTO_INCREMENT,
  firstname VARCHAR(32) NOT NULL,
  secondname VARCHAR(32) NULL,
  lastname VARCHAR(32) NOT NULL,
  secondlastname VARCHAR(32) NULL,
  document_number INT(10) NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE DocumentType(
  id_document_type INT PRIMARY KEY AUTO_INCREMENT,
  name_document_type ENUM('dni', 'pasaporte' ) NOT NULL,
  secondname VARCHAR(32) NULL,
  lastname VARCHAR(32) NOT NULL,
  secondlastname VARCHAR(32) NULL,
  document_number INT(10) NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE Phone(
  id_phone INT PRIMARY KEY AUTO_INCREMENT,
  phone_number TINYINT(13) NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);

CREATE TABLE Address(
  id_address INT PRIMARY KEY AUTO_INCREMENT,
  address_line1 VARCHAR(45) NOT NULL,
  address_line2 VARCHAR(45) NOT NULL,
  city VARCHAR(45) NOT NULL,
  municipality VARCHAR(45) NOT NULL,
  state VARCHAR(45) NOT NULL,
  country VARCHAR(45) NOT NULL,
  id_user INT NOT NULL,
  FOREIGN KEY (id_user) REFERENCES Users(id_user)
);
