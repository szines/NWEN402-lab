At the moment, launch mininet and ryu manually.

Inside VM:

    ryu-manager ./vendor/ryu/ryu/app/ofctl_rest.py
    sudo mn --topo=tree,2,3 --mac --controller=remote --switch ovsk,protocols=OpenFlow13

Outside VM:

    cd ryu_web_client
    ember s --proxy