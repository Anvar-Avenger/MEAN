function success(res, data, msg = 'Muvaffaqiyatli') {
    return res.json({
        success: true,
        data,
        msg
    });
}

function fail(res, errors = [], msg = 'Muvaffaqiyatsiz') {
    return res.status(200).json({
        success: false,
        errors,
        msg
    });
}

module.exports = {
    success, fail
}