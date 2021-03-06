import requests

from flask import Blueprint, request, make_response, jsonify

compatibility_bp = Blueprint('compatibility_bp', __name__)
headers = {'Content-Type': 'applicaton/json', 'Access-Control-Allow-Origin': 'https://job-affair.herokuapp.com'}


def job_user_info(job_id, username):
    job_resp = requests.get('https://torre.co/api/opportunities/' + job_id)
    user_resp = requests.get('https://torre.bio/api/bios/' + username)

    if job_resp.status_code == 404 or user_resp.status_code == 404:
        return make_response(
            jsonify(
                    {"message": "not found"}
                ), 404, headers)

    if job_resp.status_code != 200 or user_resp.status_code != 200:
        return make_response(
            jsonify(
                    {"message": "API not working"}
                ), 400, headers)

    user_strs = user_resp.json()['strengths']
    user_ints = user_resp.json()['interests']

    job_skills = job_resp.json()['strengths']

    return {'user_strs': user_strs, 'user_ints': user_ints, 'job_skills': job_skills}


@compatibility_bp.route('/compatibility/', methods=['GET'])
def compatibility_test():
    user_job_info = job_user_info(request.args.get('jobid'), request.args.get('username'))
    if 'user_strs' not in user_job_info:
        return user_job_info

    match = []
    found = False
    count = 0
    total = 0
    skills = user_job_info['job_skills']
    for skill in skills:

        for strength in user_job_info['user_strs']:
            if skill['name'].lower() == strength['name'].lower():
                match.append(skill['name'])
                count = count + 1
                found = True
                break

        for interest in user_job_info['user_ints']:
            if skill['name'].lower() == interest['name'].lower() and (not found):
                count = count + 1
                match.append(skill['name'])
                break

        found = False
        total = total + 1

    return make_response(jsonify({'match': float(count / total) * 100, 'skills': match}), 200, headers)
