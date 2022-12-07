1. Access to the EFS file system 
2. list the efs filesystem

3. Run instance in AZa 

```bash

aws ec2 run-instances --image-id ami-02b01316e6e3496d9 \
--count 1 --instance-type t2.micro --key-name ec2_key_pair \
--security-group-ids sg-00298e6785ce4e3e6 \
--subnet-id subnet-03d16be5c636bad73 \
--tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=efs-ec2-az-a}]' 

 ```

4. Run instance in AZb
 
```bash
aws ec2 run-instances --image-id ami-02b01316e6e3496d9 \
--count 1 --instance-type t2.micro --key-name ec2_key_pair \
--security-group-ids sg-00298e6785ce4e3e6 \
--subnet-id subnet-0d24db64f34fb2088 \
--tag-specifications 'ResourceType=instance,Tags=[{Key=Name,Value=efs-ec2-az-b}]' 

```

5. Access to the instances from two sessions of mobaxterm
```bash  
ssh -i ec2_key_pair.pem  ec2-user@IP
```
6. Change the hostname 
   
```bash  
sudo hostnamectl set-hostname efs-ec2-az-

```

7. Create a folder named efs-ec2-az-a   & efs-ec2-az-b

8.  Mount the target in the ec2 instances