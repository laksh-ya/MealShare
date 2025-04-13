
  // QR Schema
  const QRSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      enum: ['breakfast', 'lunch', 'snacks', 'dinner']
    },
    startTime: {
      type: String,
      required: true
    },
    endTime: {
      type: String,
      required: true
    },
    description: {
      type: String
    }
  });
  
  // // Meal Sharing - Records when a student shares a meal
  // const MealSharingSchema = new mongoose.Schema({
  //   student: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //     required: true
  //   },
  //   mealType: {
  //     type: String,
  //     enum: ['breakfast', 'lunch', 'snacks', 'dinner'],
  //     required: true
  //   },
  //   date: {
  //     type: Date,
  //     required: true
  //   },
  //   isActive: {
  //     type: Boolean,
  //     default: true
  //   },
  //   lockedUntil: {
  //     type: Date,
  //     required: true
  //   },
  //   qrCodeData: {
  //     type: String,
  //     required: true,
  //     unique: true
  //   },
  //   redeemedBy: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //     default: null
  //   },
  //   redeemedAt: {
  //     type: Date,
  //     default: null
  //   },
  //   floor: {
  //     type: String,
  //     enum: ['ground', 'first'],
  //     required: true
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now
  //   }
  // });
  
  // Redemption - Records when a staff member redeems a shared meal
  const RedemptionSchema = new mongoose.Schema({
    mealSharing: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'MealSharing',
      required: true
    },
    staff: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    redeemedAt: {
      type: Date,
      default: Date.now,
      required: true
    },
    notes: {
      type: String
    }
  });
  
  // // System Settings - For admin configuration
  // const SettingsSchema = new mongoose.Schema({
  //   lockDurationHours: {
  //     type: Number,
  //     default: 24
  //   },
  //   allowedMealTypes: [{
  //     type: String,
  //     enum: ['breakfast', 'lunch', 'snacks', 'dinner']
  //   }],
  //   floors: [{
  //     type: String
  //   }],
  //   updatedBy: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User'
  //   },
  //   updatedAt: {
  //     type: Date,
  //     default: Date.now
  //   }
  // });
  
  // // Notification - For system notifications
  // const NotificationSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //     required: true
  //   },
  //   message: {
  //     type: String,
  //     required: true
  //   },
  //   type: {
  //     type: String,
  //     enum: ['info', 'success', 'warning', 'error'],
  //     default: 'info'
  //   },
  //   isRead: {
  //     type: Boolean,
  //     default: false
  //   },
  //   relatedTo: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     refPath: 'onModel'
  //   },
  //   onModel: {
  //     type: String,
  //     enum: ['MealSharing', 'User', 'Redemption']
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now
  //   }
  // });
  
  // // Activity Log - For tracking system activity
  // const ActivityLogSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //     required: true
  //   },
  //   action: {
  //     type: String,
  //     required: true
  //   },
  //   details: {
  //     type: mongoose.Schema.Types.Mixed
  //   },
  //   ipAddress: {
  //     type: String
  //   },
  //   userAgent: {
  //     type: String
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now
  //   }
  // });
  
  // // Stats - For tracking system statistics
  // const StatsSchema = new mongoose.Schema({
  //   date: {
  //     type: Date,
  //     required: true,
  //     unique: true
  //   },
  //   totalMealsShared: {
  //     type: Number,
  //     default: 0
  //   },
  //   mealTypeBreakdown: {
  //     breakfast: { type: Number, default: 0 },
  //     lunch: { type: Number, default: 0 },
  //     snacks: { type: Number, default: 0 },
  //     dinner: { type: Number, default: 0 }
  //   },
  //   floorBreakdown: {
  //     ground: { type: Number, default: 0 },
  //     first: { type: Number, default: 0 }
  //   },
  //   activeUsers: {
  //     type: Number,
  //     default: 0
  //   },
  //   updatedAt: {
  //     type: Date,
  //     default: Date.now
  //   }
  // });
  
  // // Terms and Conditions - For storing T&C versions
  // const TermsSchema = new mongoose.Schema({
  //   version: {
  //     type: String,
  //     required: true,
  //     unique: true
  //   },
  //   content: {
  //     type: String,
  //     required: true
  //   },
  //   isActive: {
  //     type: Boolean,
  //     default: true
  //   },
  //   createdAt: {
  //     type: Date,
  //     default: Date.now
  //   },
  //   updatedBy: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User'
  //   }
  // });
  
  // // User Terms Acceptance - Tracks which users accepted which T&C version
  // const UserTermsSchema = new mongoose.Schema({
  //   user: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'User',
  //     required: true
  //   },
  //   terms: {
  //     type: mongoose.Schema.Types.ObjectId,
  //     ref: 'Terms',
  //     required: true
  //   },
  //   acceptedAt: {
  //     type: Date,
  //     default: Date.now,
  //     required: true
  //   },
  //   ipAddress: {
  //     type: String
  //   }
  // });