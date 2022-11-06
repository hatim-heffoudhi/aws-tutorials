
  
### VPC / Subnet examples : 

1. Create VPC (VPC only) with CIDR 10.0.0.0/16 with the name "vpc-demo-architecting" 
2. Edit DNS hostnames/resolutions to  Enable
3. Next Create Subnet, Choose VPC in the menu as "vpc-demo-architecting"
 - name : public-subnet-zone-a
 - CIDR : 10.0.1.0/24
4. Add another subnet
- name : public-subnet-zone-b
- CIDR : 10.0.2.0/24
5. Optional, Check in the console when you have two subnets with same CIDR (just for fun)
6. Click Create Subnet
7. Check items ( Route Table/Network ACL) Association, we can only update the association
8. Check number of IPs (always 5 in use) example : 
- 10.10.0.0: Network address.
- 10.10.0.1: Reserved by AWS for the VPC router.
- 10.10.0.2: Reserved by AWS. The IP address of the DNS server is always the base of the VPC network range plus 2.
- 10.10.0.3: Reserved by AWS for future use.
- 10.10.0.255: Network broadcast address. We do not support broadcast in a VPC; therefore, we reserve this address.
9. Edit subnet settings for the subnets to Enable Auto Assign public IPv4, to help us in the ec2 wizard by default receive a public ip
10. Now go to EC2 to create a new instance in this subnet
11. with the user data : 
```bash
#!/bin/bash

# get admin privileges
sudo su

# install httpd (Linux 2 version)
yum update -y
yum install -y httpd
systemctl start httpd
systemctl enable httpd
echo "Hello World from $(hostname -f)" > /var/www/html/index.html

```

12. The instance is up but we cannot connect to it
13. Let's create an Internet Gateway with name "internet-gateway-vpc-architecting" , wth statuts detached
14. Attch it to the VPC (Can we attach to multiple VPC ? no)
15. Check the access (now its working)



### VPC Peering

