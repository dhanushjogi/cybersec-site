const CalendarEvent = require('../models/CalendarEvent');

// @desc    Create a new calendar event
// @route   POST /api/calendar
// @access  Private
const createEvent = async (req, res) => {
  try {
    const { title, description, startTime, endTime, location, priority } = req.body;
    const event = await CalendarEvent.create({
      title,
      description,
      startTime,
      endTime,
      location,
      priority,
      user: req.user._id
    });
    res.status(201).json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get all calendar events for the logged-in user
// @route   GET /api/calendar
// @access  Private
const getEvents = async (req, res) => {
  try {
    const events = await CalendarEvent.find({ user: req.user._id }).sort({ startTime: 1 });
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Get a single event by ID
// @route   GET /api/calendar/:id
// @access  Private
const getEventById = async (req, res) => {
  try {
    const event = await CalendarEvent.findOne({ _id: req.params.id, user: req.user._id });
    if (event) {
      res.json(event);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Update a calendar event
// @route   PUT /api/calendar/:id
// @access  Private
const updateEvent = async (req, res) => {
  try {
    const { title, description, startTime, endTime, location, priority } = req.body;
    const event = await CalendarEvent.findOne({ _id: req.params.id, user: req.user._id });
    if (event) {
      event.title = title || event.title;
      event.description = description || event.description;
      event.startTime = startTime || event.startTime;
      event.endTime = endTime || event.endTime;
      event.location = location || event.location;
      event.priority = priority || event.priority;
      const updatedEvent = await event.save();
      res.json(updatedEvent);
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// @desc    Delete a calendar event
// @route   DELETE /api/calendar/:id
// @access  Private
const deleteEvent = async (req, res) => {
  try {
    const event = await CalendarEvent.findOne({ _id: req.params.id, user: req.user._id });
    if (event) {
      await event.deleteOne();
      res.json({ message: 'Event removed' });
    } else {
      res.status(404).json({ message: 'Event not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = {
  createEvent,
  getEvents,
  getEventById,
  updateEvent,
  deleteEvent
};
