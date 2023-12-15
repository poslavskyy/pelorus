# A test of Pelorus
This repo is a test of **Pelorus** form  from pelorus.readthedocs.io.
It contains **docs** and **source** folders.
**docs** contains documentation.
**source** contains source code for **test_app**s and **pelorus** deployment yaml.

## Deploy Pelorus Operator and Pelorus Instance
Navigate to **/source/pelorus/** and execute
> oc apply -k .

This folder contains yaml to create pelorus namespace and deploy Pelorus **Operator** as well as Pelorus **Instance**.

## Delete Pelorus Operator and Pelorus Instance
You can not just delete entire pelorus namespace to remove everything for some unknown reason.
It was observed that pelorus-instance gets stuck and not terminating in this scenario.
Here is sequence to remove everything.

First delete pelorus-instance from (-n pelorus) namespace
> oc delete -n pelorus pelorus pelorus-instance

Delete the namespace/project once above step completed
> oc delete namespace pelorus

Note:
You would have to Force terminate pelorus instance using following command if you are stuck
> oc patch pelorus/pelorus-instance --type=merge -p '{\"metadata\": {\"finalizers\":null}}'

Updated: Dec 15, 2023 @ 3.01 pm
