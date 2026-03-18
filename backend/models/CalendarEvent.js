const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
      maxlength: 100
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    allDay: {
      type: Boolean,
      default: false},

          location: {
      type: String,
      trim: true,
      maxlength: 200
    },
    priority: {
      type: String,const mongoose = require('mongoose');

const calendarEventSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    title: {
      type: String,
      required: [true, 'Please provide a title'],
      trim: true,
      maxlength: 100
    },
    description: {
      type: String,
      trim: true,
      maxlength: 500
    },
    startTime: {
      type: Date,
      required: true
    },
    endTime: {
      type: Date,
      required: true
    },
    allDay: {
      type: Boolean,
      default: false
    },
    location: {
      type: String,
      trim: true,
      maxlength: 200
    },
    priority: {
      type: String,
      enum: ['low', 'medium', 'high'],
      default: 'medium'
    },
    color: {
      type: String,
      default: '#4A90D9'
    },
    isRecurring: {
      type: Boolean,
      default: false
    },
    recurringPattern: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
      default: null
    }
  }
);

module.exports = mongoose.model('CalendarEvent', calendarEventSchema);

      enum: ['low', 'medium', 'high'],      default: 'medium'
    },
    },
    color: {
      type: String,
      default: '#4A90D9'
    },
    isRecurring: {
      type: Boolean,
      default: false
    },
    recurringPattern: {
      type: String,
      enum: ['daily', 'weekly', 'monthly', 'yearly'],
      default: null
    }
  },
);

module.exports = mongoose.model('CalendarEvent', calendarEventSchema);
