SELECT * FROM salesdata.Investments;
DROP table salesdata.Investments;
CREATE TABLE `salesdata.Investments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `txn_date` datetime DEFAULT NULL,
  `txn_type` varchar(255) DEFAULT NULL,
  `txn_shares` double DEFAULT NULL,
  `txn_price` double DEFAULT NULL,
  `fund` varchar(255) DEFAULT NULL,
  `investor` varchar(255) DEFAULT NULL,
  `sales_rep` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
