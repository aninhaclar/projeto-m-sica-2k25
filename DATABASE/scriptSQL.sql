#Criaçãp do DATABASE
create database db_controle_musicas_aa;

#Ativa o database a ser utilizado
use db_controle_musicas_aa;

create table tbl_musica (
      id               int not null primary key auto_increment,
      nome             varchar(100) not null,
      duracao          time not null,
      data_lancamento  date not null,
      letra            text,
      link             varchar(200)
      );
      
      show tables;
      
      drop table tbl_musica;
      
      select * from tbl_musica;
      
      
