#!/bin/bash

# BRANCH=$(echo $GIT_BRANCH | cut -d "/" -f 2)
# IMAGE="$JOB_NAME-$BRANCH"
#
# docker build -t $IMAGE .
#
# OUT=$?
# if [ $OUT -eq 0 ]; then
#     docker kill $IMAGE 2>/dev/null || true
#     docker rm -f $IMAGE 2>/dev/null || true
#     docker run -d \
#         --restart=on-failure:5 \
#         --name $IMAGE \
#         --env HTTP_PORT=$HTTP_PORT \
#         --publish $HTTP_PORT:$HTTP_PORT \
#         $IMAGE
# else
#     exit $OUT
# fi

echo "TODO: build script"
