// https://gist.github.com/jmaciasportela/10250863 || With modifications

/* eslint-disable no-unused-vars */
// Mime types.
    
function getMimeTypefromString (extension) {
    var mimes = {
        '.afl': 'video',
        '.aif': 'audio',
        '.aifc': 'audio',
        '.aiff': 'audio',
        '.asf': 'video',
        '.asx': 'video',
        '.au': 'audio',
        '.avi': 'video',
        '.avs': 'video',
        '.dif': 'video',
        '.dl': 'video',
        '.dv': 'video',
        '.fmf': 'video',
        '.funk': 'audio',
        '.gl': 'video',
        '.gsd': 'audio',
        '.gsm': 'audio',
        '.isu': 'video',
        '.it': 'audio',
        '.jam': 'audio',
        '.kar': 'audio',
        '.la': 'audio',
        '.lam': 'audio',
        '.lma': 'audio',
        '.m1v': 'video',
        '.m2a': 'audio',
        '.m2v': 'video',
        '.m3u': 'audio',
        '.mid': 'audio',
        '.midi': 'audio',
        '.mjf': 'audio',
        '.mjpg': 'video',
        '.mkv': 'video',
        '.mod': 'audio',
        '.moov': 'video',
        '.mov': 'video',
        '.movie': 'video',
        '.mp2': 'audio',
        '.mp3': 'audio',
        '.mp4': 'video',
        '.m4a': 'video',
        '.mpa': 'audio',
        '.mpe': 'video',
        '.mpeg': 'video',
        '.mpg': 'video',
        '.mpga': 'audio',
        '.mv': 'video',
        '.my': 'audio',
        '.pfunk': 'audio',
        '.qcp': 'audio',
        '.qt': 'video',
        '.qtc': 'video',
        '.ra': 'audio',
        '.ram': 'audio',
        '.rmi': 'audio',
        '.rmm': 'audio',
        '.rmp': 'audio',
        '.rpm': 'audio',
        '.rv': 'video',
        '.s3m': 'audio',
        '.sid': 'audio',
        '.snd': 'audio',
        '.tsi': 'audio',
        '.tsp': 'audio',
        '.vdo': 'video',
        '.viv': 'video',
        '.vivo': 'video',
        '.voc': 'audio',
        '.vos': 'video',
        '.vox': 'audio',
        '.vqe': 'audio',
        '.vqf': 'audio',
        '.vql': 'audio',
        '.wav': 'audio',
        '.xdr': 'video',
        '.xm': 'audio',
        '.xsr': 'video',
    };
    if (Object.keys(mimes).includes(extension)) {
        return Object.values(mimes)[Object.keys(mimes).indexOf(extension)];
    }
    return false;
}