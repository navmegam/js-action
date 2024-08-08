const core = require('@actions/core');
const github = require('@actions/github');
const exec = require('@actions/exec');
function run(){
    const bucket_name = core.getInput('bucket', {required: true});
    const bucket_region = core.getInput('bucket-region', {required: true});

    const bucket_url = `http://${bucket_name}/hi`
    core.notice("Hello from Java Script");
    core.notice(bucket_name, bucket_region);
    core.setOutput('bucket-url',bucket_url)
}

run();