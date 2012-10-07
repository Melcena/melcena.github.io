function tape_file() {
var file = {
name: "MUZUKRED.RKR",
start: 0x6000,
end: 0x6a5c,
entry: 0x6000,
image:
"\x0E\x1F\xCD\x09\xF8\x21\xB8\x69\xC3\x42\x61\xCD\xCE\xFA\xAF\x32\x48\x69\x32\x49\x69\x21\x96\x64\xCD\x18\xF8\xCD\x03\xF8\x4F\xCD" +
"\x09\xF8\xFE\x31\xCA\x48\x60\xFE\x32\xCA\x70\x60\xFE\x33\xCA\x3A\x61\xFE\x03\xCA\x6C\xF8\xFE\x34\xCA\xE0\x61\xFE\x35\xCA\xF8\x60" +
"\xFE\x36\xCA\x0D\x61\xC3\x0B\x60\x0E\x1F\xCD\x09\xF8\xCD\xCE\xFA\xCD\x1B\xF8\x57\xFE\xFF\xCA\x50\x60\xFE\x03\xCA\x0B\x60\xCD\x66" +
"\x63\xCD\x1B\xF8\xBA\xCA\x53\x60\xFE\xFF\xCA\x4D\x60\xC3\x50\x60\x0E\x1F\xCD\x09\xF8\x21\x00\x00\xC3\xAA\x60\xCD\xCE\xFA\xCD\x1B" +
"\xF8\x57\xFE\x03\xCA\xB3\x60\xFE\x20\xCA\xAA\x60\xFE\xFF\xCA\xBA\x60\x72\x1E\x01\xCD\x66\x63\xCD\x1B\xF8\xBA\xCA\xA4\x60\x23\x73" +
"\x23\xC3\x7B\x60\x1C\xC3\x94\x60\x72\x23\xCD\xCE\xFA\xCD\x03\xF8\xC3\x81\x60\x72\x22\x1E\x69\xC3\x0B\x60\xCD\xCE\xFA\x1E\x00\x36" +
"\x00\x23\xCD\xDD\x60\x1C\xCD\x1B\xF8\xFE\x20\xCA\xA8\x60\xFE\x03\xCA\xEF\x60\xFE\xFF\xCA\xC2\x60\x73\x23\xC3\x7E\x60\x01\x04\x20" +
"\x78\x3D\xC2\xE1\x60\x78\x3D\xC2\xE6\x60\x0D\xC2\xE0\x60\xC9\x2B\x36\x03\x22\x1E\x69\xC3\x0B\x60\x21\x20\x69\xCD\x2F\x61\x21\x00" +
"\x00\xCD\x24\xF8\xE5\xEB\x22\x1E\x69\xE1\xC3\x0B\x60\xF5\xE5\xC5\xD5\x2A\x1E\x69\xEB\x21\x00\x00\xE5\x21\x20\x69\xCD\x2F\x61\xE1" +
"\xE5\xCD\x16\xFB\xE1\xCD\x27\xF8\xD1\xC1\xE1\xF1\xC3\x0B\x60\xCD\x18\xF8\xCD\x03\xF8\x4F\xCD\x09\xF8\xC9\x0E\x1F\xCD\x09\xF8\x21" +
"\x00\x00\xCD\xCE\xFA\x56\x23\x5E\x7A\xFE\x09\xCA\xA7\x61\xFE\x00\xCA\x6D\x61\xFE\x03\xCA\x0B\x60\xFE\x01\xCA\xAE\x61\xFE\x02\xCA" +
"\x7B\x61\xCD\x66\x63\x1D\xC2\x62\x61\x23\xC3\x42\x61\xCD\xCE\xFA\xCD\xDD\x60\x1D\xC2\x70\x61\x23\xC3\x42\x61\x3A\x49\x69\xB7\xCA" +
"\x93\x61\x3A\x4A\x69\xB7\xCA\x0B\x60\x3D\x32\x4A\x69\x21\x00\x00\xC3\x42\x61\x7B\xB7\xCA\x0B\x60\x3D\x32\x4A\x69\x3E\x01\x32\x49" +
"\x69\x21\x00\x00\xC3\x42\x61\x23\x22\x4C\x69\xC3\x42\x61\x3A\x48\x69\xB7\xCA\xCF\x61\x3A\x4B\x69\xB7\xCA\xC6\x61\x3D\x32\x4B\x69" +
"\x2A\x4C\x69\xC3\x42\x61\x3E\x00\x32\x48\x69\x23\xC3\x42\x61\x7B\xB7\xCA\xC6\x61\x3D\x32\x4B\x69\x3E\x01\x32\x48\x69\xC3\xC0\x61" +
"\x21\x00\x00\xE5\x21\x8C\x65\xCD\x18\xF8\xE1\xC3\x23\x62\xCD\x03\xF8\xFE\x54\xCA\xBF\x62\xFE\x74\xCA\xBF\x62\xFE\x44\xCA\x00\x63" +
"\xFE\x64\xCA\x00\x63\xFE\x18\xCA\x21\x62\xFE\x08\xCA\x9A\x62\xFE\x0C\xCA\xB9\x62\xFE\x03\xCA\x0B\x60\xFE\x19\xCA\x23\x62\xC3\xE3" +
"\x61\x23\x23\x56\x23\x5E\x2B\x7A\xFE\x03\xCA\x7B\x62\xFE\x00\xCA\x8B\x62\xFE\x01\xCA\x54\x62\xFE\x02\xCA\x65\x62\xFE\x09\xCA\x70" +
"\x62\xCD\x47\x62\xC3\xEE\x61\xD5\xCD\x66\x63\x1D\xC2\x48\x62\xD1\xCD\xCE\xFA\xC9\xE5\x21\x4E\x69\xCD\x18\xF8\xE1\x23\x7E\xCD\x15" +
"\xF8\x2B\xC3\xEE\x61\xE5\x21\x7A\x69\xCD\x18\xF8\xE1\xC3\x5C\x62\xE5\x21\xA7\x69\xCD\x18\xF8\xE1\xC3\xEE\x61\xE5\x36\x02\x23\x36" +
"\x02\x23\x36\x03\x22\x1E\x69\xE1\xC3\xEE\x61\xE5\x21\x9C\x67\xCD\x18\xF8\xE1\x7B\xCD\x15\xF8\xC3\xEE\x61\x7C\xFE\x00\xC2\xB1\x62" +
"\x7D\xFE\x00\xC2\xB1\x62\xE5\x21\xC4\x67\xCD\x18\xF8\xE1\xC3\xEE\x61\x2B\x5E\x2B\x56\x7A\xC3\x2D\x62\x21\x00\x00\xC3\x23\x62\xE5" +
"\x21\xEF\x67\xCD\x18\xF8\xE1\x56\x23\x5E\x2B\xCD\xCE\xFA\xCD\x1B\xF8\x47\xFE\xFF\xCA\xCB\x62\xFE\x1A\xCA\xF8\x62\xFE\x19\xCA\xF1" +
"\x62\x32\x9F\x68\xCD\x66\x63\xCD\x1B\xF8\xB8\xCA\xE4\x62\xC3\xCB\x62\x7A\xCD\x47\x62\xC3\xCB\x62\x3A\x9F\x68\x57\x72\xC3\xEE\x61" +
"\xE5\x21\xA1\x68\xCD\x18\xF8\xE1\x56\x23\x5E\x7B\x32\xA0\x68\xCD\x15\xF8\xCD\x03\xF8\xFE\x03\xCA\x54\x63\xFE\x08\xCA\x58\x63\xFE" +
"\x19\xCA\x42\x63\xFE\x18\xCA\x5F\x63\xFE\x1A\xCA\x4F\x63\x32\xA0\x68\xE5\x21\x19\x69\xCD\x18\xF8\xE1\x3A\xA0\x68\xCD\x15\xF8\xC3" +
"\x12\x63\xD5\x3A\xA0\x68\x5F\x7A\xCD\x47\x62\xD1\xC3\x12\x63\x3A\xA0\x68\x5F\x73\x2B\xC3\xE3\x61\x3A\xA0\x68\x3D\xC3\x2E\x63\x3A" +
"\xA0\x68\x3C\xC3\x2E\x63\xF5\xE5\xD5\xC5\x21\xCE\x63\x85\x6F\x3E\x00\x8C\x67\x7E\x21\x4E\x64\x85\x6F\x3E\x00\x8C\x67\x4E\x23\x46" +
"\xCD\x88\x63\xC1\xD1\xE1\xF1\xC9\xE5\x3E\x80\x32\x08\xE0\x21\x00\x00\x39\x31\x00\x00\x22\x94\x64\x78\xFB\x3D\xE1\xE1\xC2\x9A\x63" +
"\x78\xF3\x3D\xE1\xE1\xC2\xA2\x63\x0D\xE1\xE1\xC2\x98\x63\x21\x04\xE0\x36\xD0\x36\x76\x23\x36\x23\x36\x49\x3E\x27\x32\x01\xC0\x3E" +
"\xE0\x32\x01\xC0\x2E\x08\x36\xA4\x2A\x94\x64\xF9\xE1\xC9\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00" +
"\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x00\x20\x00\x26\x24\x00\x2A" +
"\x2E\x30\x34\x38\x3A\x3E\x42\x44\x00\x00\x00\x00\x00\x00\x1E\x0A\x1A\x2C\x1C\x36\x00\x3C\x00\x10\x28\x32\x18\x0C\x38\x16\x0E\x02" +
"\x12\x08\x14\x2E\x20\x08\x16\x04\x00\x40\x22\x44\x06\x00\x1E\x0A\x1A\x2C\x00\x36\x00\x3C\x00\x10\x28\x32\x18\x0C\x38\x16\x0E\x02" +
"\x12\x08\x14\x2E\x20\x08\x10\x04\x00\x40\x22\x44\x06\x00\x04\xF7\x05\xE8\x05\xD9\x06\xCA\x06\xC0\x06\xB7\x07\xAD\x07\xA0\x07\x97" +
"\x08\x8F\x08\x89\x09\x80\x0A\x78\x0A\x73\x0B\x6C\x0B\x66\x0C\x61\x0D\x5D\x0E\x55\x0F\x4F\x10\x4C\x10\x49\x11\x44\x13\x3F\x14\x3B" +
"\x15\x39\x17\x35\x18\x33\x19\x30\x1A\x2D\x1C\x2A\x1E\x28\x20\x25\x21\x23\x23\x21\xC1\x76\x1F\x1B\x59\x22\x2C\x3D\x3D\x3D\x3D\x3D" +
"\x3D\x3D\x3D\x20\x6D\x75\x7A\x79\x6B\x61\x6C\x78\x6E\x79\x6A\x20\x72\x65\x64\x61\x6B\x74\x6F\x72\x20\x3D\x3D\x3D\x3D\x3D\x3D\x3D" +
"\x3D\x1B\x59\x24\x3A\x22\x77\x69\x72\x74\x75\x6F\x7A\x22\x1B\x59\x26\x34\x2D\x2D\x2D\x20\x75\x6B\x61\x76\x69\x74\x65\x20\x72\x65" +
"\x76\x69\x6D\x20\x2D\x2D\x2D\x1B\x59\x28\x31\x31\x20\x2D\x20\x6D\x75\x7A\x79\x6B\x61\x6C\x78\x6E\x79\x65\x20\x75\x70\x72\x61\x76" +
"\x6E\x65\x6E\x69\x71\x1B\x59\x29\x31\x32\x20\x2D\x20\x7A\x61\x70\x69\x73\x78\x20\x6D\x75\x7A\x79\x6B\x69\x1B\x59\x2A\x31\x33\x20" +
"\x2D\x20\x77\x6F\x73\x70\x72\x6F\x69\x7A\x77\x65\x64\x65\x6E\x69\x65\x1B\x59\x2B\x31\x34\x20\x2D\x20\x6B\x6F\x72\x72\x65\x6B\x63" +
"\x69\x71\x20\x7A\x61\x70\x69\x73\x69\x1B\x59\x2C\x31\x35\x20\x2D\x20\x77\x77\x6F\x64\x20\x73\x20\x6D\x61\x67\x6E\x69\x74\x6F\x66" +
"\x6F\x6E\x61\x1B\x59\x2D\x31\x36\x20\x2D\x20\x77\x79\x77\x6F\x64\x20\x6E\x61\x20\x6D\x61\x67\x6E\x69\x74\x6F\x66\x6F\x6E\x1B\x59" +
"\x2F\x3B\x3D\x3E\x20\x3C\x3D\x1B\x59\x2F\x3D\x00\x1F\x2D\x2D\x2D\x20\x72\x65\x76\x69\x6D\x20\x6B\x6F\x72\x72\x65\x6B\x63\x69\x69" +
"\x20\x7A\x61\x70\x69\x73\x69\x20\x2D\x2D\x2D\x0A\x0D\x20\x6D\x65\x6C\x6F\x64\x69\x71\x20\x69\x73\x70\x6F\x6C\x6E\x71\x65\x74\x73" +
"\x71\x20\x70\x6F\x20\x7B\x61\x67\x61\x6D\x2E\x0D\x0A\x73\x6C\x65\x64\x75\x60\x7D\x69\x6A\x20\x7B\x61\x67\x20\x6F\x70\x72\x65\x64" +
"\x65\x6C\x71\x65\x74\x73\x71\x20\x6B\x6C\x61\x77\x69\x7B\x61\x6D\x69\x0D\x0A\x73\x74\x72\x65\x6C\x6B\x61\x20\x77\x6C\x65\x77\x6F" +
"\x20\x69\x20\x73\x74\x72\x65\x6C\x6B\x61\x20\x77\x70\x72\x61\x77\x6F\x2E\x0A\x0D\x6B\x6C\x61\x77\x69\x7B\x61\x20\x73\x74\x72\x65" +
"\x6C\x6B\x61\x20\x77\x20\x6E\x61\x7E\x61\x6C\x6F\x20\x7C\x6B\x72\x61\x6E\x61\x20\x0D\x0A\x20\x6E\x61\x20\x74\x65\x6B\x75\x7D\x65" +
"\x6D\x20\x7B\x61\x67\x65\x20\x77\x79\x20\x6D\x6F\x76\x65\x74\x65\x20\x69\x7A\x6D\x65\x6E\x69\x74\x78\x20\x0D\x0A\x77\x79\x73\x6F" +
"\x74\x75\x20\x74\x6F\x6E\x61\x20\x28\x74\x29\x2C\x20\x64\x6C\x69\x74\x65\x6C\x78\x6E\x6F\x73\x74\x78\x20\x28\x64\x29\x0D\x0A\x20" +
"\x70\x72\x69\x20\x6B\x6F\x72\x72\x65\x6B\x63\x69\x69\x20\x74\x6F\x6E\x61\x20\x7A\x61\x70\x6F\x6D\x69\x6E\x61\x65\x74\x73\x71\x0D" +
"\x0A\x20\x70\x6F\x73\x6C\x65\x64\x6E\x69\x6A\x20\x70\x72\x65\x64\x22\x71\x77\x6C\x65\x6E\x6E\x79\x6A\x20\x74\x6F\x6E\x20\x70\x65" +
"\x72\x65\x64\x0D\x0A\x77\x79\x68\x6F\x64\x6F\x6D\x20\x69\x7A\x20\x6B\x6F\x72\x72\x65\x6B\x63\x69\x69\x20\x70\x6F\x20\x73\x74\x72" +
"\x65\x6C\x6B\x65\x20\x77\x6E\x69\x7A\x2E\x0D\x0A\x20\x6B\x6F\x72\x72\x65\x6B\x63\x69\x71\x20\x64\x6C\x69\x74\x65\x6C\x78\x6E\x6F" +
"\x73\x74\x69\x20\x70\x72\x6F\x69\x7A\x77\x6F\x64\x69\x74\x73\x71\x20\x0D\x0A\x6B\x6C\x61\x77\x69\x7B\x61\x6D\x69\x20\x73\x74\x72" +
"\x65\x6C\x6B\x61\x20\x77\x70\x72\x61\x77\x6F\x28\x62\x6F\x6C\x78\x7B\x65\x29\x0D\x0A\x69\x20\x73\x74\x72\x65\x6C\x6B\x61\x20\x77" +
"\x6C\x65\x77\x6F\x28\x6D\x65\x6E\x78\x7B\x65\x29\x2E\x20\x77\x79\x68\x6F\x64\x20\x74\x61\x6B\x76\x65\x2E\x0D\x0A\x00\x0D\x0A\x6F" +
"\x62\x6E\x61\x72\x75\x76\x65\x6E\x20\x70\x72\x69\x7A\x6E\x61\x6B\x20\x6B\x6F\x6E\x63\x61\x20\x6D\x65\x6C\x6F\x64\x69\x69\x0D\x0A" +
"\x2D\x2D\x2D\x2D\x20\x77\x6F\x7A\x77\x72\x61\x74\x20\x6E\x61\x20\x7B\x61\x67\x20\x6E\x61\x7A\x61\x64\x0D\x0A\x00\x0D\x0A\x70\x72" +
"\x65\x64\x22\x71\x77\x6C\x65\x6E\x61\x20\x70\x61\x75\x7A\x61\x2E\x20\x65\x65\x20\x64\x6C\x69\x74\x65\x6C\x78\x6E\x6F\x73\x74\x78" +
"\x20\x2D\x20\x00\x0D\x0A\x72\x65\x77\x65\x72\x73\x20\x6E\x65\x77\x6F\x7A\x6D\x6F\x76\x65\x6E\x2E\x20\x7C\x74\x6F\x20\x6E\x61\x7E" +
"\x61\x6C\x6F\x20\x6D\x65\x6C\x6F\x64\x69\x69\x2E\x0D\x0A\x00\x1F\x2D\x2D\x2D\x20\x6B\x6F\x72\x72\x65\x6B\x63\x69\x71\x20\x74\x6F" +
"\x6E\x61\x20\x2D\x2D\x2D\x0D\x0A\x20\x7A\x61\x6D\x65\x6E\x61\x20\x74\x65\x6B\x75\x7D\x65\x67\x6F\x20\x74\x6F\x6E\x61\x20\x70\x72" +
"\x6F\x69\x7A\x77\x6F\x64\x69\x74\x73\x71\x0D\x0A\x20\x70\x6F\x73\x6C\x65\x20\x6E\x61\x76\x61\x74\x69\x71\x20\x6B\x6C\x61\x77\x69" +
"\x7B\x69\x20\x22\x73\x74\x72\x65\x6C\x6B\x61\x20\x77\x6E\x69\x7A\x22\x0D\x0A\x20\x64\x6F\x20\x7C\x74\x6F\x67\x6F\x20\x74\x65\x6B" +
"\x75\x7D\x69\x6A\x20\x74\x6F\x6E\x20\x6D\x6F\x76\x6E\x6F\x20\x75\x73\x6C\x79\x7B\x61\x74\x78\x0D\x0A\x20\x6E\x61\x76\x61\x77\x20" +
"\x6B\x6C\x61\x77\x69\x7B\x75\x20\x22\x73\x74\x72\x65\x6C\x6B\x61\x20\x77\x77\x65\x72\x68\x22\x2E\x0D\x0A\x3E\x3E\x3E\x20\x00\x09" +
"\x00\x1F\x2D\x2D\x2D\x20\x6B\x6F\x72\x72\x65\x6B\x74\x69\x72\x6F\x77\x6B\x61\x20\x64\x6C\x69\x74\x65\x6C\x78\x6E\x6F\x73\x74\x69" +
"\x20\x7A\x77\x75\x6B\x61\x20\x2D\x2D\x2D\x0A\x0D\x20\x6B\x6F\x72\x72\x65\x6B\x74\x69\x72\x6F\x77\x6B\x61\x20\x77\x65\x64\x65\x74" +
"\x73\x71\x20\x6B\x6C\x61\x77\x69\x7B\x61\x6D\x69\x0D\x0A\x20\x22\x2D\x2D\x3E\x22\x20\x62\x6F\x6C\x78\x7B\x65\x20\x69\x20\x22\x3C" +
"\x2D\x2D\x22\x20\x6D\x65\x6E\x78\x7B\x65\x2E\x20\x70\x72\x6F\x7B\x75\x2E\x2E\x2E\x1B\x59\x2A\x3E\x00\x1B\x59\x2A\x3E\x00\xA4\x00" +
"\x0D\x20\x65\x73\x6C\x69\x20\x6D\x61\x67\x6E\x69\x74\x6F\x66\x6F\x6E\x20\x67\x6F\x74\x6F\x77\x20\x6E\x61\x76\x6D\x69\x74\x65\x20" +
"\x22\x77\x6B\x22\x20\x2D\x2D\x00\x00\x00\x00\x00\x02\x00\x0A\x0D\x2D\x2D\x2D\x20\x6C\x6F\x6B\x61\x6C\x78\x6E\x79\x6A\x20\x70\x6F" +
"\x77\x74\x6F\x72\x20\x73\x20\x7E\x69\x73\x6C\x6F\x6D\x20\x70\x6F\x77\x74\x6F\x72\x6F\x77\x20\x2D\x20\x00\x0D\x0A\x2D\x2D\x2D\x20" +
"\x67\x6C\x6F\x62\x61\x6C\x78\x6E\x79\x6A\x20\x70\x6F\x77\x74\x6F\x72\x20\x73\x20\x7E\x69\x73\x6C\x6F\x6D\x20\x70\x6F\x77\x74\x6F" +
"\x72\x6F\x77\x20\x2D\x20\x00\x0D\x0A\x2D\x2D\x2D\x20\x66\x6F\x6E\x61\x72\x78\x20\x2D\x2D\x2D\x00\x55\x02\x45\x02\x47\x02\x36\x02" +
"\x47\x02\x4B\x02\x43\x02\x2F\x02\x2C\x02\x4A\x02\x4E\x02\x4A\x02\x43\x02\x2F\x02\x4E\x02\x39\x02\x37\x02\x45\x02\x4B\x02\x43\x02" +
"\x35\x02\x4B\x02\x45\x02\x4B\x02\x39\x02\x58\x02\x40\x02\x4A\x02\x49\x02\x58\x02\x40\x02\x55\x02\x41\x02\x49\x02\x44\x02\x55\x02" +
"\x36\x02\x5B\x02\x37\x02\x36\x02\x37\x02\x40\x02\x43\x02\x37\x02\x4E\x02\x45\x02\x4B\x02\x40\x02\x49\x02\x4C\x02\x40\x02\x2F\x02" +
"\x4A\x02\x33\x02\x38\x02\x5B\x02\x42\x02\x2C\x02\x4A\x02\x4B\x02\x4E\x02\x5B\x02\x2C\x02\x42\x02\x50\x02\x2E\x02\x40\x02\x42\x02" +
"\x5E\x02\x51\x02\x46\x02\x51\x02\x46\x02\x40\x02\x4A\x02\x33\x02\x5B\x02\x47\x02\x45\x02\x33\x02\x55\x03\x03\x6F\x3E"};
ui.file_loaded(file);
}
tape_file();