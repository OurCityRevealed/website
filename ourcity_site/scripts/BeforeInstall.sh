#!/bin/bash

source /website/ourcity_site/scripts/common_variables.sh

# check if the application folder exists
if [ ! -d "$DESTINATION_PATH" ]; then
  mkdir $DESTINATION_PATH
fi

# delete /node_modules folder if it exists,
# so there are no old/unused files/assets
if [ -d "$DESTINATION_PATH/node_modules" ]; then
  rm -Rf $DESTINATION_PATH/node_modules
fi