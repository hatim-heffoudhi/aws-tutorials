1. Access to the EFS file system 
2. list the efs filesystem

3. Run instance in AZa 

```bash

aws ec2 run-instances --image-id ami-02b01316e6e3496d9 \
--count 1 --instance-type t2.micro --key-name ec2_key_pair \
--security-group-ids sg-00298e6785ce4e3e6 \
--subnet-id subnet-03d16be5c636bad73

 ```

4. Run instance in AZb
 
```bash

aws ec2 run-instances --image-id ami-02b01316e6e3496d9 \
--count 1 --instance-type t2.micro --key-name ec2_key_pair \
--security-group-ids sg-00298e6785ce4e3e6 \
--subnet-id subnet-0f9d80276f16c7533

````

5. Access to the instances from two sessions of mobaxterm