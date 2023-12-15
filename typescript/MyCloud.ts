import * as cdk from 'aws-cdk-lib';
import { aws_s3 as s3, aws_ec2 as ec2 } from 'aws-cdk-lib';

// TypeScript makes it easy for us to use 3rd-party libraries
export class HelloCdkStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

  }
}