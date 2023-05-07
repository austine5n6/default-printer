import platform
import sys

if platform.system() == 'Windows':
    import win32print

    def get_default_printer():
        printer_name = win32print.GetDefaultPrinter()
        return printer_name

elif platform.system() in ('Linux', 'Darwin'):
    import cups

    def get_default_printer():
        conn = cups.Connection()
        printer_name = conn.getPrinters().get(conn.getDefault(), {}).get('device-uri')
        return printer_name

else:
    raise OSError('Unsupported platform: ' + platform.system())

if __name__ == '__main__':
    printer_name = get_default_printer()
    # print('Default printer:', printer_name)
    print(printer_name)
