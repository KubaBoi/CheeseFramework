#cheese

from re import M


class FileHeaders:
    """
    https://www.geeksforgeeks.org/http-headers-content-type/
    """
    __suffixes = {
        "html": "text/html",
        "css": "text/css",
        "csv": "text/csv",
        "txt": "text/plain",
        "xml": "text/xml",
        "js": "application/javascript",
        "pdf": "application/pdf",
        "zip": "application/zip",
        "xlsx": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "mp3": "audio/mpeg",
        "gif": "image/gif",
        "png": "image/png",
        "jpg": "image/jpg",
        "jpeg": "image/jpeg",
        "mp4": "video/mp4",
        "mkv": "video/mp4",
        "mpeg": "video/mpeg"
    }

    @staticmethod
    def getHeader(file):
        suffix = file.split(".")[-1]
        if (suffix in FileHeaders.__suffixes):
            return FileHeaders.__suffixes[suffix]
        raise NotImplemented("Suffix not found")