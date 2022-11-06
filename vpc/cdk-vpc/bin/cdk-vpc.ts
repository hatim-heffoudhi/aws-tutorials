#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { CdkVpcStack } from '../lib/cdk-vpc-stack';

const app = new cdk.App();
new CdkVpcStack(app, 'CdkVpcStack');