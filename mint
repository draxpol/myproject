name: ssh
on: 
  workflow_dispatch:
defaults:
  run:
    shell: bash

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: fastai/workflows/ssh@master
      with:
        ssh_key: ${{ secrets.SSH_KEY }}
        key_file: id_ecdsa
    - uses: actions/checkout@v2
    - name: Session Setup
      uses: mxschmitt/action-tmate@master
