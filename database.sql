CREATE DATABASE facturation
GO

USE facturation
GO

CREATE TABLE dbo.Product
    (ProductID int PRIMARY KEY NOT NULL IDENTITY(1,1),
    ProductName varchar(25) NOT NULL,
    Price money NULL,
    Stock int NULL)

INSERT dbo.Product (ProductName, Price, Stock)
    VALUES ('Celular', 12.48, 2)
INSERT dbo.Product (ProductName, Price, Stock)
    VALUES ('Televisor', 35.50, 6)

CREATE TABLE dbo.Customer
    (CustomerID int PRIMARY KEY NOT NULL IDENTITY(1,1),
    Name varchar(50) NULL,
    LastName varchar(50) NULL,
    Address varchar(50) NULL,
    BirthDate Date NULL,
    Phone varchar(50) NULL,
    Email varchar(50) NULL)

INSERT dbo.Customer (Name, LastName, Address, BirthDate, Phone, Email)
    VALUES('Juan', 'Ramirez', 'Calle 12', '1/1/2008', '3101234567', 'juan@gmail.com')
INSERT dbo.Customer (Name, LastName, Address, BirthDate, Phone, Email)
    VALUES('Maria', 'Pascuas', 'Calle 10', '5/2/1990', '3108901011', 'maria@gmail.com')

CREATE TABLE dbo.Invoice
    (InvoiceID int PRIMARY KEY NOT NULL IDENTITY(1,1),
    CustomerID int FOREIGN KEY REFERENCES dbo.Customer(CustomerID),
    Date DATE NULL)

INSERT dbo.Invoice (CustomerID, Date)
    VALUES(1, '1/1/2007')
INSERT dbo.Invoice (CustomerID, Date)
    VALUES(2, '5/2/2020')
    
CREATE TABLE dbo.Detail
    (DetailID int PRIMARY KEY NOT NULL IDENTITY(1,1),
    InvoiceID int FOREIGN KEY REFERENCES dbo.Invoice(InvoiceID),
    ProductID int FOREIGN KEY REFERENCES dbo.Product(ProductID),
    Amount int NULL,
    Price money NULL)

INSERT dbo.Detail (InvoiceID, ProductID, Amount, Price)
    VALUES (1, 1, 2, 12.48)
INSERT dbo.Detail (InvoiceID, ProductID, Amount, Price)
    VALUES (2, 2, 6, 35.50)