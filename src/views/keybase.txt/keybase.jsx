import React from "react";

const prove = `==================================================================
https://keybase.io/farid212
--------------------------------------------------------------------

I hereby claim:

  * I am an admin of http://www.asmuch.xyz
  * I am farid212 (https://keybase.io/farid212) on keybase.
  * I have a public key ASC_rtw1owkKnP9ctC27tf7xNL8cEGi_Cibq2gOhHlHFWAo

To do so, I am signing this object:

{
  "body": {
    "key": {
      "eldest_kid": "012013b1ae2f780c740a82cffa73cafe8e205bb8085449ee222f32afa9819d32f9750a",
      "host": "keybase.io",
      "kid": "0120bfaedc35a3090a9cff5cb42dbbb5fef134bf1c1068bf0a26eada03a11e51c5580a",
      "uid": "f62cc2a2cacbae10ffcd5c9b8b2cf519",
      "username": "farid212"
    },
    "merkle_root": {
      "ctime": 1568369258,
      "hash": "f205cc3f514e7e492c2575d0bfe5131044b73e4cc950c6979dd7b3531f5dd663affe6bd4465f3172bbf017c2e579ed1d24ac4a77d7ea33bbe684148c04eb2608",
      "hash_meta": "2734ce52801e805b2aa146114fbe92ba698f0a0aa8d693af32c3ad98991ff076",
      "seqno": 7133028
    },
    "service": {
      "entropy": "YIeZ7D1xSfzn2CCyKrKAIN8S",
      "hostname": "www.asmuch.xyz",
      "protocol": "http:"
    },
    "type": "web_service_binding",
    "version": 2
  },
  "client": {
    "name": "keybase.io go client",
    "version": "4.4.1"
  },
  "ctime": 1568369285,
  "expire_in": 504576000,
  "prev": "8f9811b7068b9dfa9d53636aea6966a6dc7abed9cf700b9b1a3ce9ce45bb0578",
  "seqno": 18,
  "tag": "signature"
}

which yields the signature:

hKRib2R5hqhkZXRhY2hlZMOpaGFzaF90eXBlCqNrZXnEIwEgv67cNaMJCpz/XLQtu7X+8TS/HBBovwom6toDoR5RxVgKp3BheWxvYWTESpcCEsQgj5gRtwaLnfqdU2Nq6mlmptx6vtnPcAubGjzpzkW7BXjEIEDPfK8W0MiYPKkb49farfzQschMoz0VI4Wp+EgJd259AgHCo3NpZ8RAJfSv5KE86Y0m7aOU4GuQjl+naxOtpI/GrvewEgcxsVmXxCMOrJ0DdVaI+hE9E8xhsc3q1va/BREjpODjU8seDahzaWdfdHlwZSCkaGFzaIKkdHlwZQildmFsdWXEIOvPLiFShaBAaRR4sptG4iFEohSnaUAJtJe8snxwVR0po3RhZ80CAqd2ZXJzaW9uAQ==

And finally, I am proving ownership of this host by posting or
appending to this document.

View my publicly-auditable identity here: https://keybase.io/farid212

==================================================================`;

const keybase = () => {
  return (
    <React.Fragment>
      <p>{prove}</p>
    </React.Fragment>
  );
};

export default keybase;
