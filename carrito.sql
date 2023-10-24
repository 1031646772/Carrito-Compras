create database Tecno;
use tecno;
create table producto(
id int auto_increment primary key,
nombre varchar(255) not null,
descripcion varchar(255) not null,
precio bigint not null
);
create table user(
id_user int auto_increment primary key,
nombre varchar(255) not null,
apellido varchar (255) not null,
correo varchar(255)not null,
contraseña varchar(255) not null
);

