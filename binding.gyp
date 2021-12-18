{
    "variables": {
        "module_name%": "electron-printer",
        "module_path%": "lib"
    },
    "targets": [{
        "target_name": "electron-printer",
        "cflags!": ["-fno-exceptions"],
        "cflags_cc!": ["-fno-exceptions"],
        "sources": [
            "src/macros.hh",
            "src/node_printer_win.cc",
            "src/node_printer.cc",
            "src/node_printer.hpp",
        ],
        'include_dirs': [
            "<!@(node -p \"require('node-addon-api').include\")",
            "<!(node -e \"require('nan')\")"
        ],
        'libraries': [],
        'dependencies': [
            "<!(node -p \"require('node-addon-api').gyp\")"
        ],
        'defines': ['NAPI_DISABLE_CPP_EXCEPTIONS']
    }]
}
