create database trabajoautonomo2;
use trabajoautonomo2;
CREATE USER 'autonomo'@'localhost' identified by 'autonomo';
GRANT ALL PRIVILEGES ON trabajoautonomo2.* TO autonomo@localhost;
FLUSH PRIVILEGES;

create table persona(
	nombre varchar(50),
    apellidos varchar(50),
    edad int,
    fecha_nacimiento date
    );
    
    
insert into persona values('Karla', 'Burgos', 23, '1996-03-23');
insert into persona values('Olga', 'Gayrey', 35, '1984-01-6');
insert into persona values('Rodolfo', 'Cornejo', 82, '1937-02-21');
insert into persona values('Carlos', 'Mendez', 47, '1972-07-07');

select * from persona;