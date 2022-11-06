


Example of CLI ue case 

### Use to translate some text

```bash
aws translate translate-text \
 --region eu-west-2 \
 --source-language-code "en" \
 --target-language-code "in" \
 --text "hello! my name is Hatim"
 ```


### Use to start instance EC2 

```bash
aws ec2 start-instances --instance-ids i-0016289dc8999a7bb
 ```

### Use to stop instance EC2 


```bash
aws ec2 stop-instances --instance-ids i-0016289dc8999a7bb
 ```

We can use the cli to control our cost as mentioned in the link https://medium.com/@hatim.heff/how-can-i-minimize-my-aws-bills-based-on-ba64ff3cb9d4
