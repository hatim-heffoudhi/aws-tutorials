


## Start/stop instances EC2 by Tags

1. Get the EC2 instance by tag
 
```bash

aws ec2 describe-instances --query 'Reservations[*].Instances[*].[InstanceId]'  \
--filters "Name=env,Values=dev" --output text 

```
2. Delete the EC2 instances with the ids output from the command in step 1


## Add new EBS volume 
1. Go To Volumes in the console
2. Create new volume (gp2) with 150GiB volume size - Create it in the same availability zone of the EC2 instance.
3. Each 1GIB give 3 IOPS that means if 100 Gib you will get 100x3=300IOPS
4. The EBS volume will be created in the same availability zone, check in the UI that the EBS is Available
5. Check the specific EBS volume created, and choose in the menu "Actions" -> "Attach volume" 
6. Choose the instance in the list (get all instances in the same availability zone)
7. Click on Attach with the specific parameters ( example of the path  /dev/sdg)
8. Go to the instance and type "lsblk" to list the blocks devices
9. Check if the volume has any data using "sudo file -s /dev/xvdg" for example put yout device
10. If you have output with "/dev/xvdg: data" that means that the volume is empty
11. Format the volume to the ext4 filesystem with "sudo mkfs -t ext4 /dev/xvdg"
12. Create a new directory of you choice like "sudo mkdir /new-volume" to mount the new volume
13. mount the volume by using "sudo mount /dev/xvdg /new-volume" 

```bash

[root@ip-10-0-1-4 dev]# df -h
Filesystem      Size  Used Avail Use% Mounted on
devtmpfs        978M     0  978M   0% /dev
tmpfs           986M     0  986M   0% /dev/shm
tmpfs           986M  448K  986M   1% /run
tmpfs           986M     0  986M   0% /sys/fs/cgroup
/dev/xvda1      100G  1.7G   99G   2% /
tmpfs           198M     0  198M   0% /run/user/1000
/dev/xvdf       148G   24K  140G   1% /xvdf
/dev/xvdg        50G   24K   47G   1% /new-volume
```

```bash

[root@ip-10-0-1-4 /]# lsblk
NAME    MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT
xvda    202:0    0  100G  0 disk
└─xvda1 202:1    0  100G  0 part /
xvdf    202:80   0  150G  0 disk /xvdf
xvdg    202:96   0   50G  0 disk /new-volume
[root@ip-10-0-1-4 /]#

```



Links 
https://youtu.be/Pn3miC_tTH0
