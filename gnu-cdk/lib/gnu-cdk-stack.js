const {Stack, Duration, aws_ecr} = require('aws-cdk-lib')
const {v4: uuid4} = require('uuid')

class GnuCdkStack extends Stack {
    /**
     *
     * @param {Construct} scope
     * @param {string} id
     * @param {StackProps=} props
     */
    constructor(scope, id, props) {
        super(scope, id, props)

        // The code that defines your stack goes here

        // example resource
        // const queue = new sqs.Queue(this, 'GnuCdkQueue', {
        //   visibilityTimeout: Duration.seconds(300)
        // });

        const repositoryName = `repository-${uuid4(null, null, null)}`;

        new aws_ecr.Repository(this, repositoryName, {
            repositoryName,
        })
    }
}

module.exports = {GnuCdkStack}
