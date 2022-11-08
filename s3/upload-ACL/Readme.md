
1. Open S3 page 

2. Check that there is no region, just Global, and that is because the name of the bucket must be unique globally,
but we can see the region in the list.

3. Create a new bucket
   
4. Put a bucket name that exist to show the error message
5. Choose the destinated region
6. Objects ACLs  (Recommanded ACLs Disabled to be owned by the account)
7. By default block all public access (leat privilege principal)
8. Bucket versioning is disabled by default, enable it to have for each mutation a new version
9. name it as test-bucket-architecting
10. Create a folder images
11. upload an image in folder images/
12. Try to access the image (blocked)
13. Access with Open and visualize on Postman 
14. Change it to public with ACL ( Change ACLs make public)
15. Access again 
16. Update the image for versioning
17. Calculating about prices with aws s3 calculator