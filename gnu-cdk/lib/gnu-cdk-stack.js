const {Stack, Duration, aws_ecr} = require('aws-cdk-lib')

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

        const gnuNginx = `gnu-nginx`;
        const gnuPhp = `gnu-php`;

        new aws_ecr.Repository(this, gnuNginx, {
            repositoryName: gnuNginx,
        })

        new aws_ecr.Repository(this, gnuPhp, {
            repositoryName: gnuPhp,
        })
    }
}

module.exports = {GnuCdkStack}
