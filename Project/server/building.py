class building:
    def __init__(self, id, name, latitude, longitude):
        self.id = id
        self.name = name
        self.latitude = latitude
        self.longitude = longitude

    def __str__(self):
        return "%d - %s - %f - %f" % (self.id, self.name, self.latitude, self.longitude)
