To build a new image:

docker build --tag=iamfurukawa/boring-server:13 .
docker run --name boring-server -p6663:6663 iamfurukawa/boring-server:13

docker push iamfurukawa/boring-server:13