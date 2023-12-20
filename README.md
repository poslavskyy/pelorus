# A test of Pelorus
This repo is a test of **Pelorus** form  from pelorus.readthedocs.io.
It contains **source** folder with source code for **test_app**s and **pelorus** deployment kustomization.
Pelorus kustomization designed to create **pelorus** namespace on Openshift, deploy Pelorus **Operator** and Pelorus **Instance**.

One can alternatively deploy Pelorus instance if Operator was previously deployed by navigating to **/source/pelorus/Instance** and applying kustomization.

## Deploy Pelorus Operator and Pelorus Instance in one shot
Navigate to **/source/pelorus/** and execute
> oc apply -k .

This folder contains yaml to create pelorus namespace and deploy Pelorus **Operator** as well as Pelorus **Instance**.

## Deploy Pelorus Instance (if Operator was previousl deployed)
Navigate to **/source/pelorus/Instance** and execute
> oc apply -k .

## Delete Pelorus Operator and Pelorus Instance
You can not just delete entire pelorus namespace to remove everything for some unknown reason.
It was observed that pelorus-instance gets stuck and not terminating in this scenario.
Here is sequence to remove everything.

First delete pelorus-instance from (-n pelorus) namespace
> oc delete -n pelorus pelorus pelorus-instance

Delete the namespace/project once above step completed
> oc delete namespace pelorus

Note:
You would have to Force terminate pelorus instance using following command if you are stuck with terminating instance/namespace
> oc patch pelorus/pelorus-instance --type=merge -p '{\"metadata\": {\"finalizers\":null}}'

Updated: Dec 20, 2023 @ 2.37 pm
