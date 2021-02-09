# This script will run after Typescript was compiled into the ./built folder
# It will only be run inside Heroku's build, not with 'npm run build'


echo ' -------------- Setup.sh started            -------------- '

# If a private repo is available to get the secret assets from, replace the /built/assets folder
echo 'STEP 1/1: Add secret assets repository'

if  ! test -z "${SECRET_ASSETS_REPOSITORY}"; then
  echo '> Asset repository set in ENV:'
  echo $SECRET_ASSETS_REPOSITORY
  echo '> Key to access it (KEEP THIS PRIVATE):'
  echo $SECRET_ASSETS_KEY

  cd ./assets

  echo '> Cleaning up the assets folder:'
  rm -r ./*

  echo '> Cloning the secret asset repo into it'
  ssh-agent bash -c 'ssh-add - <<< "${SECRET_ASSETS_KEY}"; git clone "${SECRET_ASSETS_REPOSITORY}"'

  echo '> These files are now there:'
  ls
else
  echo '> No Asset repository set in ENV, skipping step'
fi

echo ' -------------- Setup.sh ended successfully -------------- '