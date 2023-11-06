# AKnightPS
A Proof-of-Concept Reverse1999 Private/Offline server

## Installation

## Fiddler script
```
import Fiddler;

const list = ["sl916.com"]

class Handlers {
    static function OnBeforeRequest(oS: Session) {
        for (var i = 0; i < list.length; i++) {
            if (oS.host.EndsWith(list[i]) && !oS.fullUrl.Contains("output_")) {
                //oS.oRequest.headers.UriScheme = "http";
                oS.host = "localhost"; // This can also be replaced with another IP address.
                //oS.oRequest.headers.Remove("Sec-WebSocket-Protocol");
            }
        }
    }
};
```
